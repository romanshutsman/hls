import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';
import {ServicesDialogComponent} from '../_shared/dialogs/services-dialog/services-dialog.component';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase';
import {FormGroup} from '@angular/forms';
import {FormBuilder} from '@angular/forms';
import { ServiceService } from './../_shared/service.service';
import {AuthSocialComponent} from '../auth-social/auth-social.component';
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
  facebookId: any;
  showBlockNumber = false;
  msg: string;
  phoneNumber: number;
  uid: any;
  dataUser;
  facebook;
  gmail;

  constructor(
    private dialogRef: MatDialogRef<ServicesDialogComponent>,
    private afAuth: AngularFireAuth,
    private fb: FormBuilder,
    private service: ServiceService,
    private dialog: MatDialog ) {
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
        console.log(result);
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
        console.log(result);
        this.uid = this.user['uid'];
        this.isAuthentificated = true;
        this.dialogRef.close(AuthComponent);
      })
      .then(() => {
        localStorage.setItem('auth', 'true');
        this.service.transferData(this.isAuthentificated);
      })
      .catch( error => {
        console.log(error, "Incorrect code entered?");
        this.isAuthentificated = false;
        localStorage.setItem('auth', 'false');
        this.service.transferData(this.isAuthentificated);
      });
      // ['facebookId']
      setTimeout(() => {
        const gId = localStorage.getItem('gm');
        const fb = localStorage.getItem('fb');
        if (gId) {
          const phoneNumber = firebase.auth().currentUser.phoneNumber;
          const userId = firebase.auth().currentUser.uid;
          const gmailString = gId.toString();
          const fbString = gId.toString();
          const d = {};
          d['googleId'] = gmailString;
          if (phoneNumber) {
            d['phone'] = phoneNumber;
          }
          console.log(d);
          console.log(firebase.auth().currentUser);
          firebase.database().ref('/users/' + userId).update(d);
        }
        if (fb) {
          const phoneNumber = firebase.auth().currentUser.providerData[0].phoneNumber;
          const userId = firebase.auth().currentUser.uid;
          const gmailString = gId.toString();
          const fbString = fb.toString();
          const d = {};
          d['facebookId'] = fbString;
          if (phoneNumber) {
            d['phone'] = phoneNumber;
          }
          console.log(d);
          console.log(firebase.auth().currentUser);
          firebase.database().ref('/users/' + userId).update(d);
        }
      }, 5000);
  }
  }
