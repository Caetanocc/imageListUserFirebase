const firebaseConfig = {
    apiKey: "",
    authDomain: ".com",
    databaseURL: "https://-default-rtdb.firebaseio.com",
    projectId: "",
    storageBucket: ".appspot.com",
    messagingSenderId: "",
    appId: "",
    measurementId: "G-"
     };
  
    // Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
  
    // Firebase Database Reference and the child
const dbRef = firebase.database().ref();
// const pessoaRef = dbRef.child('avaliacaoip');

var storage = firebase.storage();
  
