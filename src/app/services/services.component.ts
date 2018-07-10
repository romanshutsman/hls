import {Component, OnInit, ViewChild} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {Router, ActivatedRoute} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {MatDialog, MatDialogRef} from '@angular/material';
import {ServicesDialogComponent} from '../_shared/dialogs/services-dialog/services-dialog.component';
import {NgxSpinnerService} from 'ngx-spinner';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  dataOfServices: any;
  currentTypeOfServices: any;

  showMap: boolean;
  zoom: number = 8;
  lat: number = 40.730610;
  lng: number = -73.935242;
  markers = [];
  markersObject = {};

  filterForm: FormGroup;


  constructor(private db: AngularFireDatabase, private route: ActivatedRoute, public dialog: MatDialog, private spinner: NgxSpinnerService) {
    this.showMap = false;
  }

  ngOnInit() {
    this.spinner.show();
    this.route.params.subscribe(params => {
      this.currentTypeOfServices = params.id;
    });
    this.getServices();
    this.filterForm = new FormGroup({
      'restaurant': new FormControl(),
      'food_delivery': new FormControl(),
      'gym': new FormControl(),
      'nutritionists': new FormControl(),
      'shops': new FormControl()
    });
  }

  getImg(photos) {
    return 'url(\'' + photos[Object.keys(photos)[0]] + '\')';
  }

  getServices() {
    this.db.object('business').valueChanges().subscribe(res => {
      this.transformServices(res);
    });
  }

  transformServices(services) {
    this.dataOfServices = {};
    for (let key in services){
      if (!this.dataOfServices[services[key].type]) this.dataOfServices[services[key].type] = [];
      let servicItem = services[key];
      servicItem.fbId = key;
      this.dataOfServices[services[key].type].push(servicItem);
    }
    this.createDataOfMarks(this.dataOfServices);
    console.log(this.dataOfServices);
  }

  createDataOfMarks(data) {
    for (const key in data) {
      this.markersObject[key] = [];
      data[key].forEach(item => {
        this.markersObject[key].push({type: key, lat: item.lat, lng: item.lng, img: '../../assets/img/icons/locations/' + key + '.png'});
      });
      console.log(this.markersObject);
      this.spinner.hide();
    }
  }

  setMarkers() {
    this.markers = [];
    for (let key in this.filterForm.value) {
      if (this.filterForm.value[key]) this.markers = this.markers.concat(this.markersObject[key]);
    }
  }

  openServiceDialog(service) {
    this.dialog.open(ServicesDialogComponent, {data: service});
  }

}
