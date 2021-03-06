import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProjectenComponent } from './projecten/projecten.component';
import { ResultatenComponent } from './resultaten/resultaten.component';
import { OverMijComponent } from './over-mij/over-mij.component';
import { ContactComponent } from './contact/contact.component';
import {AppRoutingModule} from './app-routing.module';
import { HomeComponent } from './home/home.component';
import {NavigatiebarComponent} from './navigatiebar/navigatiebar.component';
import { SamenwerkingenComponent } from './samenwerkingen/samenwerkingen.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectenComponent,
    ResultatenComponent,
    OverMijComponent,
    ContactComponent,
    HomeComponent,
    NavigatiebarComponent,
    SamenwerkingenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
