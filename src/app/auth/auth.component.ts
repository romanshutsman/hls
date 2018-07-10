import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';
import {ServicesDialogComponent} from '../_shared/dialogs/services-dialog/services-dialog.component';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase';
import {FormGroup} from '@angular/forms';
import {FormBuilder} from '@angular/forms';
import { ServiceService } from './../_shared/service.service';
declare var grecaptcha: any;


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  authForm: FormGroup;
  windowRef: any;
  user: any;
  isAuthentificated = false;
  googleId: any;

  constructor(
    private dialogRef: MatDialogRef<ServicesDialogComponent>,
    private afAuth: AngularFireAuth,
    private fb: FormBuilder,
    private service: ServiceService) {
  }

  ngOnInit() {
    this.authForm = this.fb.group({
      phoneNumber: [''],
      verificationCode: ['']
    });
    this.windowRef = window;
    this.windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    this.windowRef.recaptchaVerifier.render();
    this.windowRef.confirmationResult = '';
  }

  sendLoginCode() {
    const appVerifier = this.windowRef.recaptchaVerifier;

    const num = this.authForm.getRawValue().phoneNumber;

    firebase.auth().signInWithPhoneNumber(num, appVerifier)
      .then(result => {
        this.windowRef.confirmationResult = result;

      })
      .catch( error => {
        console.log(error)
      } );

  }

  verifyLoginCode() {
    const verificationCode = this.authForm.getRawValue().verificationCode;
    this.windowRef.confirmationResult
      .confirm(verificationCode)
      .then( result => {
        this.user = result.user;
        this.isAuthentificated = true;
        this.dialogRef.close(AuthComponent);
        localStorage.setItem('auth', 'true');
        this.service.transferData(this.isAuthentificated);
      })
      .catch( error => {
        console.log(error, "Incorrect code entered?");
        this.isAuthentificated = false;
        localStorage.setItem('auth', 'false');
        this.service.transferData(this.isAuthentificated);
      });
  }
  singUpGmail() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const token = result.credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log(result);
      // console.log(result['additionalUserInfo']['profile']['id']);
      const googleId = result['additionalUserInfo']['profile']['id'];
      // console.log(this.googleId);
      console.log(user);
      firebase.database().ref('/users').once('value', (snap) => {
        const data = snap.val();
        console.log(data);
        const keys = Object.keys(data);
        console.log(keys);
        for (const key of keys) {
          firebase.database().ref('/users/' + key).once('value', (snapshot) => {
            const userInfo = snapshot.val();
            // console.log(userInfo['googleId']);
            const id = userInfo['googleId'];
            if (id == googleId) {
              console.log('Match');
            } else {
              console.log('doesnt exist');
            }
          });
        }
      })
      // ...
    }).catch(function(error) {
      console.log(error);
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential;
      // ...
    });
  }
  singUpFacebook() {
    const provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const token = result.credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log(result);
      // console.log(result['additionalUserInfo']['profile']['id']);
      const facebookId = result['additionalUserInfo']['profile']['id'];
      // console.log(this.facebookId);
      console.log(user);
      firebase.database().ref('/users').once('value', (snap) => {
        const data = snap.val();
        console.log(data);
        const keys = Object.keys(data);
        console.log(keys);
        for (const key of keys) {
          firebase.database().ref('/users/' + key).once('value', (snapshot) => {
            const userInfo = snapshot.val();
            // console.log(userInfo['facebookId']);
            const id = userInfo['facebookId'];
            if (id == facebookId) {
              console.log('Match');
            } else {
              console.log('doesnt exist');
            }
          });
        }
      })
      // ...
    }).catch(function(error) {
      console.log(error);
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential;
      // ...
    });
  }
}
