const OpenAI = require('openai');

exports.handler = async function (event) {
  try {
    if (event.httpMethod !== 'POST') {
      return {
        statusCode: 405,
        body: 'Method Not Allowed',
      };
    }

    const { text, tone } = JSON.parse(event.body || '{}');

    if (!text || !tone) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing text or tone' }),
      };
    }

    if (!process.env.OPENAI_API_KEY) {
      throw new Error('OPENAI_API_KEY is not set');
    }

    const client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const response = await client.responses.create({
      model: 'gpt-5-nano',
      input: `Rewrite the following text in a ${tone} tone. Keep the meaning and intent the same, but also make the language more concise.

Text:
${text}`,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({
        result: response.output_text.trim(),
      }),
    };
  } catch (err) {
    console.error('Rewrite function error:', err);

    return {
      statusCode: 500,
      body: JSON.stringify({
        error: err.message || 'Internal Server Error',
      }),
    };
  }
};
