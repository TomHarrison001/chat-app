import React from "react";
import config from "./config";
import "./App.css";

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

firebase.initializeApp({
  apiKey: config.apiKey,
  authDomain: config.authDomain,
  projectId: config.projectId,
  storageBucket: config.messagingSenderId,
  messagingSenderId: config.messagingSenderId,
  appId: config.appId,
});

function App() {
  return (
    <div className="App">
      <header></header>
    </div>
  );
}

export default App;
