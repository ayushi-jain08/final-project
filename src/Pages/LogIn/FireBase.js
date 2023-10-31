import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCzu6ZTVKDYMQFs1oZreU-CxMyLNox6me4",
  authDomain: "coding-era-63791.firebaseapp.com",
  projectId: "coding-era-63791",
  storageBucket: "coding-era-63791.appspot.com",
  messagingSenderId: "303068610667",
  appId: "1:303068610667:web:59c5cd4257baf18d61312e",
  measurementId: "G-WXFK1LSX12"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app