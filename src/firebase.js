import { initializeApp, getApps } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
databaseURL: "https://dunkirk-dc6cf-default-rtdb.firebaseio.com/",
apiKey: "AIzaSyD2jK0Y7CEUygdqvBPjLNuV0DFiZ0rWVFA",
authDomain: "dunkirk-dc6cf.firebaseapp.com",
projectId: "dunkirk-dc6cf",
storageBucket: "dunkirk-dc6cf.firebasestorage.app",
messagingSenderId: "767650557025",
appId: "1:767650557025:web:ec451bbe0b201acbbe8e20"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];

const database = getDatabase(app);

export { database };
