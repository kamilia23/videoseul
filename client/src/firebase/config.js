import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyCovOuagJpUIvL9EsPeye5w05Lyrtvj494",
//   authDomain: "lastvideo-7de43.firebaseapp.com",
//   projectId: "lastvideo-7de43",
//   storageBucket: "lastvideo-7de43.appspot.com",
//   messagingSenderId: "560335050799",
//   appId: "1:560335050799:web:4a93983fc50511a5fd4eda"
// };

const firebaseConfig = {
  apiKey: "AIzaSyD4Oygy0rEY4KR0vQRjOfzFdZWaLrWY1v8",
  authDomain: "vidcal-c91de.firebaseapp.com",
  projectId: "vidcal-c91de",
  storageBucket: "vidcal-c91de.appspot.com",
  messagingSenderId: "101716012410",
  appId: "1:101716012410:web:0085b8a00b1cfb8bcfbac3",
};

const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const auth = getAuth(app);

export { auth, firestore };
