import * as firebase from 'firebase';
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDsjYQPrgg8GOt3yrrYWnsKzr0mScnDCbI",
    authDomain: "chat-app-native-24b1c.firebaseapp.com",
    projectId: "chat-app-native-24b1c",
    storageBucket: "chat-app-native-24b1c.appspot.com",
    messagingSenderId: "636976232731",
    appId: "1:636976232731:web:6c8cef97e7f4a179613bbe",
    measurementId: "G-WWCWJKCKVZ"
  };

let app;
if(firebase.apps.length===0){
app=firebase.initializeApp(firebaseConfig)
}
else{
  app=firebase.app();
}

const db=app.firestore();
const auth=firebase.auth();

export {db,auth};