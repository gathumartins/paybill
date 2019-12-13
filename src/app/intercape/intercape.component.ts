import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-intercape',
  templateUrl: './intercape.component.html',
  styles: []
})
export class IntercapeComponent implements OnInit {

form1: FormGroup;
  constructor(private titleService: Title, private router: Router) {
    this.titleService.setTitle('Intercape');
  }

  ngOnInit() {
    this.form1 = new FormGroup({
      leavingFrom: new FormControl('Leaving From'),
      destination: new FormControl('Destination'),
      departureDate: new FormControl('')
    });
  }
  onSearch(intecapeResults) {
      console.log(intecapeResults);
    }
}
