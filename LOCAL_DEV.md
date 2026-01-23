# Local Development Setup

## Prerequisites

- Node.js 22+
- OpenAI API Key

## Setup

1. Install dependencies:

```bash
npm install
cd lambda && npm install && cd ..
```

2. Create `.env` file in the root directory:

```bash
cp .env.local.example .env
```

3. Add your OpenAI API key to `.env`:

```
OPENAI_API_KEY=your_actual_api_key_here
```

## Run Locally

Start the local development server:

```bash
npm run dev
```

This will:

- Start Express server on http://localhost:3000
- Serve static files (HTML, CSS, JS)
- Run Lambda function locally at http://localhost:3000/api/rewrite

Open http://localhost:3000 in your browser to test the site.

## Deploy to AWS

Push to main/master branch and GitHub Actions will automatically:

1. Deploy Lambda function to AWS
2. Create API Gateway endpoint
3. Update config.js with the API endpoint
4. Deploy static files to S3
5. Invalidate CloudFront cache
