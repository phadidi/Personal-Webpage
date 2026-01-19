const OpenAI = require('openai');

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

exports.handler = async function () {
  try {
    const prompt = `
Generate a Word Ladder puzzle with RANDOM and VARIED words.

Rules:
- Two DIFFERENT English words
- Same length (3–5 letters)
- Common, solvable words
- No proper nouns
- Generate DIFFERENT words each time - be creative and varied
- Avoid common pairs like COLD/WARM, LOVE/HATE, etc.

Respond ONLY in JSON:
{
  "start": "WORD",
  "end": "WORD"
}
`;

    const response = await client.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [{ role: 'user', content: prompt }],
      response_format: { type: 'json_object' },
      temperature: 1.5,
    });

    const { start, end } = JSON.parse(response.choices[0].message.content);

    return {
      statusCode: 200,
      body: JSON.stringify({
        start: start.toUpperCase(),
        end: end.toUpperCase(),
      }),
    };
  } catch (err) {
    console.error(err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to generate puzzle' }),
    };
  }
};
