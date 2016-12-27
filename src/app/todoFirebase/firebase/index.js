import firebase from 'firebase';

try {
  if (process.env.NODE_ENV === 'test'){
    var config = {
      apiKey: process.env.REACT_APP_TEST_API_KEY,
      authDomain: process.env.REACT_APP_TEST_AUTH_DOMAIN,
      databaseURL: process.env.REACT_APP_TEST_DATABASE_URL,
      storageBucket: process.env.REACT_APP_TEST_STORAGE_BUCKET,
      messagingSenderId: process.env.REACT_APP_TEST_SENDER_ID
    };
  }
  else {
    var config = {
      apiKey: process.env.REACT_APP_DEV_API_KEY,
      authDomain: process.env.REACT_APP_DEV_AUTH_DOMAIN,
      databaseURL: process.env.REACT_APP_DEV_DATABASE_URL,
      storageBucket: process.env.REACT_APP_DEV_STORAGE_BUCKET,
      messagingSenderId: process.env.REACT_APP_DEV_SENDER_ID
    }; 
  }
  firebase.initializeApp(config);
} catch (e) {

}

export var githubProvider = new firebase.auth.GithubAuthProvider();
export var firebaseRef = firebase.database().ref();
export default firebase;
