import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-power',
  templateUrl: './power.component.html',
  styles: []
})
export class PowerComponent implements OnInit {
  form1: FormGroup;
  constructor(private titleService: Title, private router: Router) {
    this.titleService.setTitle('BPC');
  }

  ngOnInit() {
    this.form1 = new FormGroup({
      bill_to_surname: new FormControl(''),
      bill_to_forename: new FormControl(''),
      bill_to_email: new FormControl(''),
      AccountNo: new FormControl(''),
      TopUpNo: new FormControl(''),
      amount: new FormControl(''),
      cboTranType: new FormControl('electricity'),
      reference_number: new FormControl('reference_number.target.value')
    });
    }
    onSubmit(powerbill) {
      console.log(powerbill);
      this.router.navigate(['/bpccheckout']);
    }
}
