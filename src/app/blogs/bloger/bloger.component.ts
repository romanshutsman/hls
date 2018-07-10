import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AngularFireDatabase} from 'angularfire2/database';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-bloger',
  templateUrl: './bloger.component.html',
  styleUrls: ['./bloger.component.scss']
})
export class BlogerComponent implements OnInit {
  currentBlogerId: any;
  currentBloger: any;
  currentBlogerArticles: any;

  constructor(private route: ActivatedRoute, private db: AngularFireDatabase, private spinner: NgxSpinnerService) {
    this.currentBloger = {
      photo: '',
      statusTitle: '',
      statusDescription: '',
      tw: '',
      fb: '',
      email: '',
      type: ''
    };
    this.currentBlogerArticles = [
      {
        photo: '',
        date: '',
        title: '',
        description: '',
        bloger_info: {
          name: '',
          photo: '',
          type: '',
          blogerId: ''
        }
      }
    ];
  }

  ngOnInit() {
    this.spinner.show();
    window.scrollTo(0, 0);
    this.route.params.subscribe(params => {
      this.currentBlogerId = params.id;
    });
    this.getBloger();
    this.getBlogs();
  }

  getBloger() {
    this.db.object('blogers/' + this.currentBlogerId).valueChanges().subscribe(res => {
      this.currentBloger = res;
    });
  }

  getBlogs() {
    this.db.list('blogs').valueChanges().subscribe(res => {
      this.currentBlogerArticles = res.filter((item: any) => item.bloger_info.blogerId === this.currentBlogerId);
      this.spinner.hide();
    });
  }

}
