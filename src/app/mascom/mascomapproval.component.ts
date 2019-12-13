import { from } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-mascomapproval',
  templateUrl: './mascomapproval.component.html',
  styles: []
})
export class MascomapprovalComponent implements OnInit {

  constructor(private titleService: Title) {
    this.titleService.setTitle('Mascom Checkout');
  }

  ngOnInit() {
  }

}
