import { initializeApp, cert } from "firebase-admin/app";
import {
  collection,
  addDoc,
} from "firebase/firestore";

// Check if FIREBASE_PRIVATE_KEY is defined and replace \n with actual new lines
const privateKey = (import.meta as any).env.FIREBASE_PRIVATE_KEY
  ? (import.meta as any).env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n")
  : undefined;

if (!privateKey) {
  throw new Error("FIREBASE_PRIVATE_KEY is not defined in environment variables.");
}

const app = initializeApp({
  credential: cert({
    clientEmail: (import.meta as any).env.FIREBASE_CLIENT_EMAIL,
    privateKey: privateKey,
    projectId: (import.meta as any).env.FIREBASE_PROJECT_ID,
  }),
});

export default { app, collection, addDoc };