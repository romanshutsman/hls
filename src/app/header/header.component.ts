import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import {ServicesDialogComponent} from '../_shared/dialogs/services-dialog/services-dialog.component';
import {GetAppComponent} from '../_shared/dialogs/get-app/get-app.component';
import {AuthComponent} from '../auth/auth.component';
import {AuthSocialComponent} from '../auth-social/auth-social.component';
import { Subscription } from 'rxjs/Subscription';
import { ServiceService } from './../_shared/service.service';
import * as firebase from 'firebase';
declare var gapi: any;
declare var FB: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  responsiveMenu: boolean = false;
  auth = false;
  public auth2: any;
  constructor(public router: Router, public dialog: MatDialog, private service: ServiceService) {
  }

  ngOnInit() {
    FB.init({
      appId      : '235103837267101',
      cookie     : true,
      xfbml      : true,
      version    : 'v3.0'
    });
    FB.AppEvents.logPageView();
    const dataStore = localStorage.getItem('auth');
    this.auth = JSON.parse(dataStore);
    this.service.subscribeAuth.subscribe(data => {
      const value = JSON.parse(data);
      this.auth = value;
    });
  }
  
  changeHeader() {
    if (this.router.url === '/home' || this.router.url === '/premium') return false;
    return true;
  }
  fixHeader() {
    if (/\/services\//.test(this.router.url)) return true;
    return false;
  }

  openGetAppDialog() {
    this.dialog.open(GetAppComponent);
  }

  openAuthDialog() {
    this.dialog.open(AuthSocialComponent);
  }
  logout() {
    this.service.transferData(false);
    localStorage.removeItem('gm');
    localStorage.removeItem('fb');
    localStorage.setItem('auth', 'false');
    firebase.auth().signOut().then(function() {
      localStorage.setItem('auth', 'false');
    }).catch(function(error) {
      console.log(error);
    });
    FB.logout(function(response) {
      console.log(response);
      const status = FB.getLoginStatus();
      console.log(status);
    });
    const auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
  }
}
