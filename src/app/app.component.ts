import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  ngOnInit() {

    const  config = {
      apiKey: "AIzaSyCr3bMGJSv8w12heh5_brUCg7kUCSjFSbs",
      authDomain: "healthy-lifestyle-9ae39.firebaseapp.com",
      databaseURL: "https://healthy-lifestyle-9ae39.firebaseio.com",
      projectId: "healthy-lifestyle-9ae39",
      storageBucket: "healthy-lifestyle-9ae39.appspot.com",
      messagingSenderId: "15808880644"
    };
    // const  config = {
    //   apiKey: "AIzaSyCr3bMGJSv8w12heh5_brUCg7kUCSjFSbs",
    //   authDomain: "healthy-lifestyle-9ae39.firebaseapp.com",
    //   databaseURL: "https://healthy-lifestyle-9ae39.firebaseio.com",
    //   projectId: "healthy-lifestyle-9ae39",
    //   storageBucket: "healthy-lifestyle-9ae39.appspot.com",
    //   messagingSenderId: "15808880644"
    // };
    firebase.initializeApp(config);
  }
  // onSignIn(googleUser) {
  //   console.log(googleUser);
  //   const profile = googleUser.getBasicProfile();
  //   console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  //   console.log('Name: ' + profile.getName());
  //   console.log('Image URL: ' + profile.getImageUrl());
  //   console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  // }
}
