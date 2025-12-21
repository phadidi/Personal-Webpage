// API Configuration
// This will be replaced during deployment with actual API Gateway endpoint
const API_CONFIG = {
  REWRITE_ENDPOINT: window.location.hostname === 'localhost' 
    ? 'http://localhost:3000/api/rewrite'
    : '/.netlify/functions/rewrite' // Default for deployed version
};
