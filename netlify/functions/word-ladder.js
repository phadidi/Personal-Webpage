const OpenAI = require('openai');

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

exports.handler = async function (event) {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    const { start, end, attempt } = JSON.parse(event.body);
    const startUpper = start.toUpperCase();
    const attemptUpper = attempt.toUpperCase();

    // Check if same length
    if (startUpper.length !== attemptUpper.length) {
      return {
        statusCode: 200,
        body: JSON.stringify({
          valid: false,
          reason: 'Word must be same length',
          hint: `Use ${startUpper.length} letters`,
        }),
      };
    }

    // Count differences
    let differences = 0;
    for (let i = 0; i < startUpper.length; i++) {
      if (startUpper[i] !== attemptUpper[i]) differences++;
    }

    if (differences !== 1) {
      return {
        statusCode: 200,
        body: JSON.stringify({
          valid: false,
          reason: 'Must change exactly ONE letter',
          hint: `Change only one letter from ${startUpper}`,
        }),
      };
    }

    // Allow reaching the goal word even if dictionary check fails
    /*if (attemptUpper === end.toUpperCase()) {
      return {
        statusCode: 200,
        ...(headers && { headers }),
        body: JSON.stringify({
          valid: true,
          reason: 'You reached the goal!',
          hint: '',
          completed: true,
        }),
      };
    }*/

    // Check if valid English word using AI
    const prompt = `Is "${attemptUpper}" a valid English word found in a standard dictionary? Answer yes if it's a real word that people use. Respond ONLY in JSON: {"valid": true or false}`;

    const response = await client.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [{ role: 'user', content: prompt }],
      response_format: { type: 'json_object' },
    });

    const result = JSON.parse(response.choices[0].message.content);

    return {
      statusCode: 200,
      body: JSON.stringify({
        valid: result.valid,
        reason: result.valid
          ? 'Valid move!'
          : `${attemptUpper} is not a valid word`,
        hint: result.valid ? '' : 'Try a dictionary word',
      }),
    };
  } catch (err) {
    console.error(err);
    return {
      statusCode: 500,
      body: JSON.stringify({
        valid: false,
        reason: 'Server error',
        hint: 'Try another word.',
      }),
    };
  }
};
