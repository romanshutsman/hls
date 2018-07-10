import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {GetAppComponent} from '../_shared/dialogs/get-app/get-app.component';

@Component({
  selector: 'app-premiums',
  templateUrl: './premiums.component.html',
  styleUrls: ['./premiums.component.scss']
})
export class PremiumsComponent implements OnInit {

  constructor( public dialog: MatDialog) { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  openGetAppDialog() {
    this.dialog.open(GetAppComponent);
  }

}
