import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { slideInAnimation } from '../animations';

@Component({
  selector: 'app-bpcapproval',
  templateUrl: './bpcapproval.component.html',
  styles: [],
  animations: [
    slideInAnimation
  ]
})
export class BpcapprovalComponent implements OnInit {

  constructor(private titleService: Title) {
    this.titleService.setTitle('BPC Checkout');
   }

  ngOnInit() {
  }

}
