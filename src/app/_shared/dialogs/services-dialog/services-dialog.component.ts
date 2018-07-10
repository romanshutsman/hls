import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-services-dialog',
  templateUrl: './services-dialog.component.html',
  styleUrls: ['./services-dialog.component.scss']
})
export class ServicesDialogComponent implements OnInit {

  zoom: number = 15;
  lat: number = 40.730610;
  lng: number = -73.935242;
  markers = [];
  ellipsisNumber: number = 500;

  constructor(private dialogRef: MatDialogRef<ServicesDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {  }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.setMarkers(this.data);
  }

  getImg(photos) {
    return 'url(\'' + photos[Object.keys(photos)[0]] + '\')';
  }

  setMarkers(service) {
    this.markers = [
      {
        lat: service.lat,
        lng: service.lng,
        img: '../../assets/img/icons/locations/' + service.type + '.png'
      }
    ];
    this.lat = service.lat;
    this.lng = service.lng;
  }

  close() {
    this.dialogRef.close();
  }

}

