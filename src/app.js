import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyCYGH0R3JGqxPE8t_uV1iI4TPb6KOSr4VE",
      authDomain: "reactauthentication-7adb1.firebaseapp.com",
      databaseURL: "https://reactauthentication-7adb1.firebaseio.com",
      projectId: "reactauthentication-7adb1",
      storageBucket: "reactauthentication-7adb1.appspot.com",
      messagingSenderId: "376362030210"
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
