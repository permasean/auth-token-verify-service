import express, { Request, Response } from 'express';

const app = express();
const port = process.env.PORT || 3000;

// Middleware for parsing JSON bodies
app.use(express.json());

// Basic route
app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Welcome to the Auth Token Verify Service' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 