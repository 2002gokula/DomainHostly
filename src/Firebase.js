import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuFEXhGyN-tT2oJsY5SU4alen4zaZImfs",
  authDomain: "domainhostly-710b8.firebaseapp.com",
  projectId: "domainhostly-710b8",
  storageBucket: "domainhostly-710b8.appspot.com",
  messagingSenderId: "821306355565",
  appId: "1:821306355565:web:9e84665e8dc0ce982f3464",
  measurementId: "G-WBJ6PBRNMK",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
