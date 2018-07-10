import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {
  responsiveMenu: boolean = false;
  blogs: any;

  constructor(private db: AngularFireDatabase, private spinner: NgxSpinnerService) {
    this.blogs = [
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
    this.getBlogs();
  }

  getBlogs() {
    this.db.list('blogs').valueChanges().subscribe(res => {
      this.blogs = res;
      this.spinner.hide();
    });
  }
}
