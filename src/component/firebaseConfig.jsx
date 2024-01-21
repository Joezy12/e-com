
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCh4OUmFpaP6JjuGGKOVsNKCpXElW6gVY0",
  authDomain: "my-work-fcd53.firebaseapp.com",
  projectId: "my-work-fcd53",
  storageBucket: "my-work-fcd53.appspot.com",
  messagingSenderId: "594710040324",
  appId: "1:594710040324:web:10da9d2ef6e58e89d98a51",
  measurementId: "G-55WJT25VG6"
};


export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getFirestore(app);
export const storage = getStorage(app);