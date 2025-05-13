import * as admin from 'firebase-admin';
import * as dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Initialize Firebase Admin
// Note: You'll need to set up your Firebase service account credentials
// You can either use environment variables or a service account JSON file
if (!admin.apps.length) {
  const appConfig: admin.AppOptions = {
    credential: admin.credential.applicationDefault(),
    projectId: process.env.FIREBASE_PROJECT_ID
  };

  admin.initializeApp(appConfig);
  
  console.log('Firebase Admin initialized successfully');
}

export const auth = admin.auth(); 