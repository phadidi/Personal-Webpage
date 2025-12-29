const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Import Lambda functions
const { handler } = require('./lambda/rewrite');
const { handler: wordLadderInitHandler } = require('./netlify/functions/word-ladder-init');
const { handler: wordLadderHandler } = require('./netlify/functions/word-ladder');

// API endpoints (before static middleware)
app.post('/api/rewrite', async (req, res) => {
  const event = {
    httpMethod: 'POST',
    body: JSON.stringify(req.body),
    headers: req.headers,
  };

  const result = await handler(event);

  res.status(result.statusCode);
  if (result.headers) {
    Object.entries(result.headers).forEach(([key, value]) => {
      res.setHeader(key, value);
    });
  }
  res.send(result.body);
});

app.get('/.netlify/functions/word-ladder-init', async (req, res) => {
  const result = await wordLadderInitHandler();
  res.status(result.statusCode).send(result.body);
});

app.post('/.netlify/functions/word-ladder', async (req, res) => {
  const event = {
    httpMethod: 'POST',
    body: JSON.stringify(req.body),
    headers: req.headers,
  };
  const result = await wordLadderHandler(event);
  res.status(result.statusCode).send(result.body);
});

app.use(express.static('.'));

app.listen(PORT, () => {
  console.log(`Local server running at http://localhost:${PORT}`);
  console.log(`Rewrite API endpoint: http://localhost:${PORT}/api/rewrite`);
  console.log(
    `Word Ladder API endpoints: http://localhost:${PORT}/api/word-ladder-init, http://localhost:${PORT}/api/word-ladder`
  );
});
