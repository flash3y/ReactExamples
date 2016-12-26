import firebase from 'firebase';

try {
  //var config = {
  //  apiKey: process.env.API_KEY,
  //  authDomain: process.env.AUTH_DOMAIN,
  //  databaseURL: process.env.DATABASE_URL,
  //  storageBucket: process.env.STORAGE_BUCKET,
  //};

  var config = {
    apiKey: "AIzaSyAyJ_sxc40zhFHV132UdBZQMreGsm7AyBg",
    authDomain: "todoapp-42a4a.firebaseapp.com",
    databaseURL: "https://todoapp-42a4a.firebaseio.com",
    storageBucket: "todoapp-42a4a.appspot.com",
    messagingSenderId: "1041824414628"
  };
  firebase.initializeApp(config);
} catch (e) {

}

export var githubProvider = new firebase.auth.GithubAuthProvider();
export var firebaseRef = firebase.database().ref();
export default firebase;
