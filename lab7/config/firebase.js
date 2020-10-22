import firebase from 'firebase';

let firebaseConfig = {
  apiKey: "AIzaSyAgjY40yIUB0gX79d9LsPueBTyGiT9a1Hc",
  authDomain: "new-react-native-599ed.firebaseapp.com",
  databaseURL: "https://new-react-native-599ed.firebaseio.com",
  projectId: "new-react-native-599ed",
  storageBucket: "new-react-native-599ed.appspot.com",
  messagingSenderId: "111397701253",
  appId: "1:111397701253:web:f3f48c75913bc87156cbec",
  measurementId: "G-DFHRJHMBY9",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
export default firebase;