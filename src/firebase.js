import firebase from 'firebase'


const  firebaseConfig = {
    apiKey: "AIzaSyCNBae5HdK3C1p6S-N27KfF0FA7NcKp3Y4",
    authDomain: "movies-app-16d8f.firebaseapp.com",
    projectId: "movies-app-16d8f",
    storageBucket: "movies-app-16d8f.appspot.com",
    messagingSenderId: "319249174919",
    appId: "1:319249174919:web:ee16004ad7c6d604258322"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase 