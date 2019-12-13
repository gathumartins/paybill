import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { slideInAnimation } from './animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
    `
      .homeBanBtn img{
        border-radius: 50%;
        transition: .5s;
      }
      .homeBanBtn img::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background: rgba(238, 94, 40, 0);
        transition: .5s;
        transform: scale(.9);
        z-index: -1;
      }
      .homeBanBtn img:hover::before {
        transform: scale(1.1);
        box-shadow: 0 0 15px rgb(238, 94, 40);
      }
      .homeBanBtn img:hover{
        border-radius: 50%;
        box-shadow: 0 0 5px rgb(238, 94, 40);
      }
      .cardsAcc{
        color:#fff;
        font-size:0.8rem;
        font-style:italic;
      }
    `
  ],
  animations: [
    slideInAnimation
  ]
})
export class HomeComponent implements OnInit {
  constructor(private titleService: Title) {
    this.titleService.setTitle('Home');
  }

  ngOnInit() {}
}
