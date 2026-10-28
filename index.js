const express = require('express');
const app = express();
const port = 3000;

// Fake hardcoded token to test Trivy Secret scanning:
const FAKE_AWS_SECRET = "AKIAIOSFODNN7EXAMPLE";

app.get('/', (req, res) => {
  res.send('Trivy Security Test App');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
