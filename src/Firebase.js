import * as firebase from 'firebase';

// Initialize Firebase
const firecon = {
  apiKey: "AIzaSyDAsVcM4vB_uEv2VP_s2WUcpy7rkHFjBoA",
  authDomain: "cf-plant-tt4.firebaseapp.com",
  databaseURL: "https://cf-plant-tt4.firebaseio.com",
  projectId: "cf-plant-tt4",
  storageBucket: "cf-plant-tt4.appspot.com",
  messagingSenderId: "332538832510",
  appId: "1:332538832510:web:0ab37182b275164ff8da2f",
  measurementId: "G-TNB8YGQ9HM"
};

firebase.initializeApp(firecon);

export default firebase;
