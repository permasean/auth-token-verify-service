import * as admin from 'firebase-admin';

// Initialize Firebase Admin
// Note: You'll need to set up your Firebase service account credentials
// You can either use environment variables or a service account JSON file
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.applicationDefault(),
  });
}

export const auth = admin.auth(); 