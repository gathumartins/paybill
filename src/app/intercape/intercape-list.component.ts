import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-intercape-list',
  templateUrl: './intercape-list.component.html',
  styles: [
    `
    .resultsRow{
      padding-inline-start: 0px !important;
      -webkit-padding-inline-start: 0px !important;
      -mozpadding-inline-start: 0px !important;
      -o-padding-inline-start: 0px !important;
    }
    .resultsRow li{
      list-style:none;
    }
    .myResult{
      min-height: 100px;
      border-radius: 4px;
    }
    .myResultInn{
      border: solid 1px rgba(0, 0, 0, 0.15);
    }
    .myResultInnMid{
      border-right:solid 1px rgba(0, 0, 0, 0.15);
      border-left:solid 1px rgba(0, 0, 0, 0.15);
    }
    .myResultInnLeft{
      padding:15px 5px;
    }
    .myResultMidInnTop{
      min-height:35px;
      padding:15px;
      border-bottom:solid 1px rgba(0, 0, 0, 0.15);
    }
    .myResultMidInnTop h6{
      font-size: 14px;
      font-weight: 600;
      color: #333333;
      margin-block-end: 0em;
    }
    .myResultMidInnBtm{
      padding:15px;
    }
    .myResultMidInnBtm p{
      font-size: 14px;
      line-height:1.5;
      color: #3649b9;
      font-weight:700;
    }
     .myResultMidInnBtm span{
      font-size: 12px;
      line-height:1.5;
      color: #333333;
    }
    .myResultInnRight h1{
      font-size: 25px;
      font-weight: bold;
      font-style: italic;
      color: #3649b9;
      margin-top:10px;
    }
    .myResultInnRight{
      padding:1rem 1.5rem;
    }
    .myResultInnRightR{
      min-height:50px !important;
    }
    .myCollapse{
      background-color: rgba(217, 217, 217, 0.15);
      border-radius:0px 0px 4px 4px;
    }
    .moreResult{
      padding-top:15px;
      padding-bottom:15px;
    }
    .moreResultInn h4{
      font-size:14px;
      font-weight: 600;
      color: #3649b9;
    }
    .discountsList label{
      font-size:14px;
      font-weight: 600;
      line-height:1.8;
      color: #333333;
    }
    .proBtn{
      margin-top:27px;
    }
    @media only screen and ( max-width:767px ){
      .myResultInnMid{
        border-right:none !important;
      }
      .myResultInnRight{
        border-top:solid 1px rgba(0, 0, 0, 0.15);
      }
    }
    @media only screen and ( min-width:768px ){
      .inputsFormTwo{
        max-width: 200px;
      }
    }
    `
  ]
})
export class IntercapeListComponent implements OnInit {

form1: FormGroup;
  constructor(private titleService: Title, private router: Router) {
    this.titleService.setTitle('Intercape');
  }

  ngOnInit() {
    this.form1 = new FormGroup({
      radioOne: new FormControl('Full Flexi'),
      radioTwo: new FormControl(''),
      dateofBirth: new FormControl('')
    });
  }
  onProceed(mySelection) {
      console.log(mySelection);
    }
}
