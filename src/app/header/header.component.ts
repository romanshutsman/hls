import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import {ServicesDialogComponent} from '../_shared/dialogs/services-dialog/services-dialog.component';
import {GetAppComponent} from '../_shared/dialogs/get-app/get-app.component';
import {AuthComponent} from '../auth/auth.component';
import { Subscription } from 'rxjs/Subscription';
import { ServiceService } from './../_shared/service.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  responsiveMenu: boolean = false;
  auth = false;
  constructor(public router: Router, public dialog: MatDialog, private service: ServiceService) {
  }

  ngOnInit() {
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
    this.dialog.open(AuthComponent);
  }
  logout() {
    this.service.transferData(false);
    firebase.auth().signOut().then(function() {
      localStorage.setItem('auth', 'false');
    }).catch(function(error) {
      console.log(error);
    });
  }
}
