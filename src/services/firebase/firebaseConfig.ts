import { initializeApp, cert } from "firebase-admin/app";
import {
  getFirestore,
  collection,
  addDoc,
  Firestore,
} from "firebase/firestore";

const app = initializeApp({
  credential: cert({
    clientEmail: (import.meta as any).env.FIREBASE_CLIENT_EMAIL,
    privateKey: (import.meta as any).env.FIREBASE_PRIVATE_KEY.replace(
      /\\n/g,
      "\n"
    ),
    //apiKey: (import.meta as any).env.FIREBASE_API_KEY,
    //authDomain: (import.meta as any).env.FIREBASE_AUTH_DOMAIN,
    projectId: (import.meta as any).env.FIREBASE_PROJECT_ID,
    //storageBucket: (import.meta as any).env.FIREBASE_STORAGE_BUCKET,
    //messaginSenderId: (import.meta as any).env.FIREBASE_MESSAGING_SENDER_ID,
    //appId: (import.meta as any).env.FIREBASE_APP_ID,
    //measurementId: (import.meta as any).env.FIREBASE_MEASUREMENT_ID,
  }),
});

export default { app, collection, addDoc };
