import express, { Request, Response } from 'express';
import { auth } from './config/firebase';
import { VerifyTokenRequest, VerifyTokenResponse } from './types/auth';

const app = express();
const port = process.env.PORT || 3000;

// Middleware for parsing JSON bodies
app.use(express.json());

// Basic route
app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Welcome to the Auth Token Verify Service' });
});

// Token verification endpoint
app.post('/verify', async (req: Request<{}, {}, VerifyTokenRequest>, res: Response<VerifyTokenResponse>) => {
  try {
    const { token, uid } = req.body;

    if (!token || !uid) {
      return res.status(400).json({
        isValid: false,
        error: 'Token and uid are required'
      });
    }

    // Verify the token
    const decodedToken = await auth.verifyIdToken(token);
    
    // Check if the token's uid matches the provided uid
    if (decodedToken.uid !== uid) {
      return res.status(401).json({
        isValid: false,
        error: 'Token uid does not match provided uid'
      });
    }

    return res.json({
      isValid: true
    });
  } catch (error) {
    console.error('Token verification error:', error);
    return res.status(401).json({
      isValid: false,
      error: 'Invalid token'
    });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 