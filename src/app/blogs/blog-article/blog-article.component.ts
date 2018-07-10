import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AngularFireDatabase} from 'angularfire2/database';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-blog-article',
  templateUrl: './blog-article.component.html',
  styleUrls: ['./blog-article.component.scss']
})
export class BlogArticleComponent implements OnInit {
  currentBlogId: any;
  currentBlog: any;
  currentBlogerArticles: any;

  constructor(private route: ActivatedRoute, private db: AngularFireDatabase, private spinner: NgxSpinnerService) {
    this.currentBlog =  {
      photo: '',
      date: '',
      title: '',
      description: '',
      blogId: '',
      bloger_info: {
        name: '',
        photo: '',
        type: ''
      }
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
      this.currentBlogId = params.id;
    });
    this.getBlog();
    this.getBlogs();
  }

  getBlog() {
    this.db.object('blogs/' + this.currentBlogId).valueChanges().subscribe(res => {
      this.currentBlog = res;
    });
  }

  getBlogs() {
    this.db.list('blogs').valueChanges().subscribe(res => {
      this.currentBlogerArticles = res.filter((item: any) => item.bloger_info.blogerId === this.currentBlog.bloger_info.blogerId);
      this.spinner.hide();
    });
  }

}
