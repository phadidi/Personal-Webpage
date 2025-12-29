const OpenAI = require('openai');

exports.handler = async function (event) {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json'
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  try {
    if (event.httpMethod !== 'POST') {
      return {
        statusCode: 405,
        headers,
        body: JSON.stringify({ error: 'Method Not Allowed' }),
      };
    }

    const { text, tone } = JSON.parse(event.body || '{}');

    if (!text || !tone) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Missing text or tone' }),
      };
    }

    if (!process.env.OPENAI_API_KEY) {
      throw new Error('OPENAI_API_KEY is not set');
    }

    const client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const response = await client.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'user',
          content: `Rewrite the following text in a ${tone} tone. Keep the meaning and intent the same, but also make the language more concise.\n\nText:\n${text}`
        }
      ],
    });

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        result: response.choices[0].message.content.trim(),
      }),
    };
  } catch (err) {
    console.error('Rewrite function error:', err);

    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        error: err.message || 'Internal Server Error',
      }),
    };
  }
};
