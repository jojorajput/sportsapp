import React from 'react';
import * as firebase from "firebase";

var config = {
  apiKey: "AIzaSyDxG9_0fdOHcxwK-vVI6pY8dH9V-il0nAU",
  authDomain: "sportsbuzz-19fd4.firebaseapp.com",
  databaseURL: "https://sportsbuzz-19fd4.firebaseio.com",
  projectId: "sportsbuzz-19fd4",
  storageBucket: "sportsbuzz-19fd4.appspot.com",
  messagingSenderId: "863264871709"
};

export default{
    initDb(){
        try{
            firebase.initializeApp(config);
        } catch(err){
            if (!/already exists/.test(err.message)) {
                console.log("Firebase initialization error", err.stack);
            }
        }
    }, 
    getDatabase(){
        return firebase.database();
    },

    getAuth(){
        return firebase.auth();
    }
}

