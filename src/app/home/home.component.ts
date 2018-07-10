import { Component, OnInit } from '@angular/core';
import { AmChartsService, AmChart } from "@amcharts/amcharts3-angular";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  showCharts: boolean = false;
  reviews = [
    {
      img: '../../assets/img/home/testimonials/Chris.jpg',
      txt: 'Loved it! Healthy Life subscription was my motivation to be active and eat healthy. The fact that you have already paid the money encourages you to use them wisely.',
      author: '- Chris Russo'
    },
    {
      img: '../../assets/img/home/testimonials/Katie.jpg',
      txt: 'Didn’t know something like this platform exists! Was of special value for me.',
      author: '- Katie Lama'
    },
    {
      img: '../../assets/img/home/testimonials/David.jpg',
      txt: 'Healthy Lifestyle’s slogan goes: Saving by spending is possible! Now I know that it really works. Will recommend to my gym mates',
      author: '- David Gleser'
    },
    {
      img: '../../assets/img/home/testimonials/Harry.jpg',
      txt: 'Personal workout and nutrition plan provided by Premium was extremely useful. My family got some practical advice as well as inspiration to go healthy.',
      author: '- Harry Johnson'
    },
    {
      img: '../../assets/img/home/testimonials/Nancy.jpg',
      txt: 'Buying Medium plan saved me a great deal of money. The price was totally worth it. As a bonus, I have discovered plenty of healthy shops nearby my home. Thank you Healthy Lifestyle.',
      author: '- Nancy Lynn'
    },
    {
      img: '../../assets/img/home/testimonials/Karen.jpg',
      txt: 'Me and my husband have been into workouts and gym since couple of years now, so it was quite surprising to find our local gym in the list. Now our monthly gym pass costs less. We bought a subscription just to try it out and will definitely extend it further.',
      author: '- Karen Meyer'
    }
  ];
  slideConfig = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1320,
        settings: {
          slidesToShow: 2,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
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

  constructor() { }

  ngOnInit() {}

  selectCity(event){
    this.showCharts = true;
  }

}
