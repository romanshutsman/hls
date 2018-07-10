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
    firebase.initializeApp(config);
  }
}
