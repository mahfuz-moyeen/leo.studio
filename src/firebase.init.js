import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey:process.env.REACT_APP_apiKey,
//   authDomain:process.env.REACT_APP_authDomain,
//   projectId:process.env.REACT_APP_projectId,
//   storageBucket:process.env.REACT_APP_storageBucket,
//   messagingSenderId:process.env.REACT_APP_messagingSenderId,
//   appId:process.env.REACT_APP_appId
// };
const firebaseConfig = {
  apiKey: "AIzaSyDUhHaektDnraxDMah7GwDe1xV4haSsQ20",
  authDomain: "leo-studio-5d849.firebaseapp.com",
  projectId: "leo-studio-5d849",
  storageBucket: "leo-studio-5d849.appspot.com",
  messagingSenderId: "629500141808",
  appId: "1:629500141808:web:25235da1f7d32a4132a235"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;