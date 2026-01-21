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
    const { start, end, current, attempt } = JSON.parse(event.body);
    const startUpper = start.toUpperCase();
    const endUpper = end.toUpperCase();
    const currentUpper = current.toUpperCase();
    const attemptUpper = attempt.toUpperCase();

    const alphaRegex = /^[A-Z]+$/;

    if (
      !alphaRegex.test(startUpper) ||
      !alphaRegex.test(endUpper) ||
      !alphaRegex.test(currentUpper) ||
      !alphaRegex.test(attemptUpper)
    ) {
      return {
        statusCode: 200,
        body: JSON.stringify({
          valid: false,
          reason: 'Only A–Z letters are allowed',
          hint: 'No numbers or symbols',
        }),
      };
    }

    // Check if same length
    if (attemptUpper.length !== startUpper.length) {
      return {
        statusCode: 200,
        body: JSON.stringify({
          valid: false,
          reason: 'Word must be same length',
          hint: `Use ${startUpper.length} letters`,
        }),
      };
    }

    if (attemptUpper === endUpper) {
      return {
        statusCode: 200,
        body: JSON.stringify({
          valid: true,
          completed: true,
          reason: 'You reached the goal!',
          hint: '',
        }),
      };
    }

    // Count differences
    let differences = 0;
    for (let i = 0; i < currentUpper.length; i++) {
      if (currentUpper[i] !== attemptUpper[i]) differences++;
    }

    if (differences !== 1) {
      return {
        statusCode: 200,
        body: JSON.stringify({
          valid: false,
          reason: 'Must change exactly ONE letter',
          hint: `Change only one letter from ${currentUpper}`,
        }),
      };
    }
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
