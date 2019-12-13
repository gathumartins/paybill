import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-dstvapproval',
  templateUrl: './dstvapproval.component.html',
  styles: []
})
export class DstvapprovalComponent implements OnInit {

  constructor(private titleService: Title) {
    this.titleService.setTitle('DSTV Checkout');
  }

  ngOnInit() {
  }

}
