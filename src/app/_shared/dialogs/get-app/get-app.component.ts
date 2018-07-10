import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {ServicesDialogComponent} from '../services-dialog/services-dialog.component';

@Component({
  selector: 'app-get-app',
  templateUrl: './get-app.component.html',
  styleUrls: ['./get-app.component.scss']
})
export class GetAppComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<GetAppComponent>) { }

  ngOnInit() {
  }

}
