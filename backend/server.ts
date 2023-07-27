import express from 'express';

const app = express();
const port = process.env.PORT || 3001;

app.get('/cars', async (req, res) => {
  try {
  } catch (error) {}
});

app.post('/cars', async (req, res) => {
  try {
  } catch (error) {}
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
