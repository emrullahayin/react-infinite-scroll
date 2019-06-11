module.exports = {
  APPLICATION_ID:
    process.env.APPLICATION_ID ||
    "3b9c1cbbefafa9c8b8fe8c8ed5ba83d4edfed66f4ec1a56331dd9712b0d27a19",
  SECRET:
    process.env.SECRET ||
    "488d3ec9674434b2aaaa9e25d3de72d31c467b8efe21d34943d80da1c78cac7a",
  CALLBACK_URL: process.env.CALLBACK_URL || "http://localhost:3000"
};
