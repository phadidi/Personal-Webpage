const OpenAI = require('openai');

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const prompt = `
Generate a Word Ladder puzzle with RANDOM and VARIED words.

Rules:
- Two DIFFERENT English words
- Same length (3–5 letters)
- Common, solvable words
- No proper nouns
- Avoid common pairs like COLD/WARM, LOVE/HATE

Respond ONLY in JSON:
{
  "start": "WORD",
  "end": "WORD"
}
`;

const isValidPuzzle = (start, end) => {
  const alpha = /^[A-Z]+$/;
  return (
    typeof start === 'string' &&
    typeof end === 'string' &&
    start !== end &&
    alpha.test(start) &&
    alpha.test(end) &&
    start.length === end.length &&
    start.length >= 3 &&
    start.length <= 5
  );
};

exports.handler = async function (event) {
  // Optional but recommended method guard
  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    for (let i = 0; i < 5; i++) {
      const response = await client.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: [{ role: 'user', content: prompt }],
        response_format: { type: 'json_object' },
        temperature: 1.5,
      });

      const { start, end } = JSON.parse(response.choices[0].message.content);

      const startUpper = start.toUpperCase();
      const endUpper = end.toUpperCase();

      if (isValidPuzzle(startUpper, endUpper)) {
        return {
          statusCode: 200,
          headers: {
            'Access-Control-Allow-Origin': '*',
          },
          body: JSON.stringify({
            start: startUpper,
            end: endUpper,
          }),
        };
      }
    }

    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        error: 'Failed to generate a valid word ladder puzzle',
      }),
    };
  } catch (err) {
    console.error('Word ladder init error:', err);
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ error: 'Failed to generate puzzle' }),
    };
  }
};
