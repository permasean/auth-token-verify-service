import * as admin from 'firebase-admin';
import * as dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Log environment variables for debugging
console.log('Firebase Project ID:', process.env.FIREBASE_PROJECT_ID);

// Initialize Firebase Admin
// Note: You'll need to set up your Firebase service account credentials
// You can either use environment variables or a service account JSON file
if (!admin.apps.length) {
  if (!process.env.FIREBASE_PROJECT_ID) {
    throw new Error('FIREBASE_PROJECT_ID is not set in environment variables');
  }

  admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    projectId: process.env.FIREBASE_PROJECT_ID
  });
  
  console.log('Firebase Admin initialized successfully');
}

export const auth = admin.auth(); 