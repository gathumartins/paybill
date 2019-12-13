import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { PowerComponent } from './power/power.component';
import { BpcapprovalComponent } from './power/bpcapproval.component';
import { DstvComponent } from './dstv/dstv.component';
import { DstvapprovalComponent } from './dstv/dstvapproval.component';
import { IntercapeComponent } from './intercape/intercape.component';
import { MascomComponent } from './mascom/mascom.component';
import { MascomapprovalComponent } from './mascom/mascomapproval.component';

import { from } from 'rxjs';



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { animation: 'HomePage' } },
  { path: 'power', component: PowerComponent, data: { animation: 'PowerPage' } },
  { path: 'bpccheckout', component: BpcapprovalComponent, data: { animation: 'BpcApproval' } },
  { path: 'dstv', component: DstvComponent, data: { animation: 'Dstv' } },
  { path: 'dstvcheckout', component: DstvapprovalComponent, data: { animation: 'DstvApproval' } },
  { path: 'mascom', component: MascomComponent, data: { animation: 'Mascom' } },
  { path: 'mascomcheckout', component: MascomapprovalComponent, data: { animation: 'MascomApproval' } },
  { path: 'intercape', component: IntercapeComponent, data: { animation: 'Intercape' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
