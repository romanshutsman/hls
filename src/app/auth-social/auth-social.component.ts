import {Component, OnInit, AfterViewInit} from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';
import {ServicesDialogComponent} from '../_shared/dialogs/services-dialog/services-dialog.component';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase';
import {FormGroup} from '@angular/forms';
import {FormBuilder} from '@angular/forms';
import { ServiceService } from './../_shared/service.service';
import {AuthComponent} from './../auth/auth.component';
import { Subscription } from 'rxjs/Subscription';
declare var grecaptcha: any;
declare var FB: any;
declare var gapi: any;


@Component({
  selector: 'app-auth-social',
  templateUrl: './auth-social.component.html',
  styleUrls: ['./auth-social.component.scss']
})
export class AuthSocialComponent implements OnInit, AfterViewInit {
  msg: string;
  public auth2: any;

  constructor(
    private dialogRef: MatDialogRef<ServicesDialogComponent>,
    private service: ServiceService,
    public dialog: MatDialog) {
  }

  ngOnInit() {
    // FB.init({
    //   appId      : '235103837267101',
    //   cookie     : true,
    //   xfbml      : true,
    //   version    : 'v3.0'
    // });
    FB.init({
      appId      : '235103837267101',
      cookie     : true,
      xfbml      : true,
      version    : 'v3.0'
    });
    FB.AppEvents.logPageView();
  }
  loginFB() {
    this.dialog.open(AuthComponent);
    this.dialogRef.close(AuthSocialComponent);
    FB.login(function(response) {
      console.log(response);
        if (response.authResponse) {
            FB.api('/me', function(resp) {
              console.log(response);
          console.log('Good to see you, ' + resp.name + '.');
          console.log("Your UID is " + resp.id);
          const fbId = resp.id;
          if (fbId) {
            firebase.database().ref('/users').once('value', (snap) => {
              const data = snap.val();
              const keys = Object.keys(data);
              for (const key of keys) {
                firebase.database().ref('/users/' + key).once('value', (snapshot) => {
                  const userInfo = snapshot.val();
                  const id = userInfo['facebookId'];
                  if (id) {
                    console.log(id);
                    if (id == fbId ) {
                      console.log('Match');
                      this.closeDiaslog();
                      this.service.transferData(true);
                    } else {
                      console.log('doesnt exist');
                      localStorage.setItem('fb', fbId);
                    }
                  }
                });
              }
            });
          }
      });
            console.log(response.authResponse);
        } else {
            // cancelled
            alert('User cancelled login or did not fully authorize.');
        }
    });
}
  googleInit() {
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: '15808880644-eh0h91pl7rpq66fn9qfk55f3i0mc7gup.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        scope: 'profile email'
      });
    });
  }
  singUpNumber() {
    this.dialog.open(AuthComponent);
    this.dialogRef.close(AuthSocialComponent);
  }
  singUpGmail() {
    this.dialog.open(AuthComponent);
    this.dialogRef.close(AuthSocialComponent);
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
      const token = result.credential.accessToken;
      const user = result.user;
      console.log(result);
      const googleId = result['additionalUserInfo']['profile']['id'];
    })
    .then(() => {
      this.authUserGoogle();
    })
    .catch(function(error) {
      console.log(error);
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = error.credential;
      this.msg = errorMessage;
    });
  }
  authUserGoogle() {
    const googleId = firebase.auth().currentUser.providerData[0]['uid'];
    firebase.database().ref('/users').once('value', (snap) => {
      const data = snap.val();
      const keys = Object.keys(data);
      for (const key of keys) {
        firebase.database().ref('/users/' + key).once('value', (snapshot) => {
          const userInfo = snapshot.val();
          const id = userInfo['googleId'];
          if (id) {
            // console.log(id);
            // console.log(googleId);
            if (id == googleId) {
              console.log('Match');
              this.closeDiaslog();
              this.service.transferData(true);
              const provider = firebase.auth().currentUser.providerData[0]['providerId'];
              if (provider == 'google.com') {
                const user = firebase.auth().currentUser;
          
                user.delete().then(function() {
                  console.log('delete');
                }, function(error) {
                  console.log(error);
                });
              }
              if (provider == 'facebook.com') {
                const user = firebase.auth().currentUser;
          
                user.delete().then(function() {
                  console.log('delete');
                }, function(error) {
                  console.log(error);
                });
              }
              return;
            } else {
              console.log('doesnt exist');
            }
          }
        });
      }
    });
  }
  closeDiaslog() {
    this.dialog.closeAll();
  }
  singUpFacebook() {
    this.dialog.open(AuthComponent);
    this.dialogRef.close(AuthSocialComponent);
    const provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
      const token = result.credential.accessToken;
      const user = result.user;
      console.log(result);
    })
    .then(() => {
      this.authUserFacebook();
    })
    .catch(function(error) {
      console.log(error);
      this.dialog.open(AuthSocialComponent);
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = error.credential;
      this.msg = errorMessage;
    });
  }
  authUserFacebook() {
    const facebookId = firebase.auth().currentUser.providerData[0]['uid'];
    firebase.database().ref('/users').once('value', (snap) => {
      const data = snap.val();
      const keys = Object.keys(data);
      for (const key of keys) {
        firebase.database().ref('/users/' + key).once('value', (snapshot) => {
          const userInfo = snapshot.val();
          const id = userInfo['facebookId'];
          if (id) {
            // console.log(id);
            // console.log(googleId);
            if (id == facebookId) {
              console.log('Match');
              this.closeDiaslog();
              this.service.transferData(true);
              return;
            } else {
              console.log('doesnt exist');
            }
          }
        });
      }
    });
  }
  onSignIn() {
    const googleUser = gapi.auth2.getAuthInstance().currentUser.get();

    console.log('Token id: ' + googleUser.getAuthResponse().id_token);
    this.dialog.open(AuthComponent);
    const profile = googleUser.getBasicProfile();
    console.log(googleUser);
    console.log(profile);
    const googleId = profile.getId();
    // const profile = googleUser.getBasicProfile();
    console.log('ID: ' + googleId); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    
    if (googleId) {
      firebase.database().ref('/users').once('value', (snap) => {
        const data = snap.val();
        const keys = Object.keys(data);
        for (const key of keys) {
          firebase.database().ref('/users/' + key).once('value', (snapshot) => {
            const userInfo = snapshot.val();
            const id = userInfo['googleId'];
            if (id) {
              // console.log(id);
              // console.log(googleId);
              if (id == googleId ) {
                console.log('Match');
                this.closeDiaslog();
                this.service.transferData(true);
              } else {
                console.log('doesnt exist');
                localStorage.setItem('gm', googleId);
              }
            }
          });
        }
      });
      // this.service.transferData(true);
      // this.closeDiaslog();
      console.log('true');
    }
  }
  ngAfterViewInit(){
    this.googleInit();
}
}
