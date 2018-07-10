import {Component, OnInit} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {MatDialog} from '@angular/material';
import {ServicesDialogComponent} from '../_shared/dialogs/services-dialog/services-dialog.component';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-about-services',
  templateUrl: './about-services.component.html',
  styleUrls: ['./about-services.component.scss']
})
export class AboutServicesComponent implements OnInit {
  dataOfServices: any;
  slideConfig: any;
  currentTypeOfServices: any;
  ready: any;

  constructor(private db: AngularFireDatabase, public dialog: MatDialog, private spinner: NgxSpinnerService) {
    this.currentTypeOfServices = 'restaurant';
    this.ready = false;
    this.slideConfig = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 3000,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 1240,
          settings: {
            slidesToShow: 3,
            dots: true
          }
        },
        {
          breakpoint: 1190,
          settings: {
            slidesToShow: 2,
            dots: true
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            dots: true
          }
        }
      ]
    };
    this.dataOfServices = {
      'restaurant': [],
      'food_delivery': [],
      'gym': [],
      'nutritionists': [],
      'shops': []
    };
  }

  ngOnInit() {
    this.spinner.show();
    setTimeout(()=>{
      this.ready = true;
      this.spinner.hide();
    },3000);
    this.getServices();
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
  }

  getImg(photos) {
    return 'url(\'' + photos[Object.keys(photos)[0]] + '\')';
  }

  changeCurrentTypeOfServices(type) {
    this.currentTypeOfServices = type;
    if (this.dataOfServices[this.currentTypeOfServices].length <= this.slideConfig.slidesToShow) {
      switch (this.dataOfServices[this.currentTypeOfServices].length) {
        case 1 :
          this.slideConfig.responsive[0].settings.slidesToShow = 1;
          break;
        case 2 :
          this.slideConfig.responsive[0].settings.slidesToShow = 1;
          break;
        case 3 :
          this.slideConfig.responsive[0].settings.slidesToShow = 2;
          break;
      }
    } else {
      this.slideConfig.responsive[0].settings.slidesToShow = 3;
    }
  }

  openServiceDialog(service) {
    this.dialog.open(ServicesDialogComponent, {data: service});
  }
}
