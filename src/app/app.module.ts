import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar.component';
import { FooterComponent } from './footer.component';
import { HomeComponent } from './home.component';
import { PowerComponent } from './power/power.component';
import { BpcapprovalComponent } from './power/bpcapproval.component';
import { DstvComponent } from './dstv/dstv.component';
import { DstvapprovalComponent } from './dstv/dstvapproval.component';
import { MascomComponent } from './mascom/mascom.component';
import { MascomapprovalComponent } from './mascom/mascomapproval.component';
import { IntercapeComponent } from './intercape/intercape.component';
import { IntercapeListComponent } from './intercape/intercape-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    PowerComponent,
    BpcapprovalComponent,
    DstvComponent,
    DstvapprovalComponent,
    MascomComponent,
    MascomapprovalComponent,
    IntercapeComponent,
    IntercapeListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
