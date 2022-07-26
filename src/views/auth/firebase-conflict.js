import {initializeApp} from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyAX2x61EgB6ajM_jTNFMFAG_DM03hprP_Q",
    authDomain: "auth-jp.firebaseapp.com",
    projectId: "auth-jp",
    storageBucket: "auth-jp.appspot.com",
    messagingSenderId: "659328228884",
    appId: "1:659328228884:web:1a2558d92a20e00fde5101"
  };


const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);