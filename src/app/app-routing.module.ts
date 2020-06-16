import { NgModule } from '@angular/core';

import {RouterModule, Routes} from '@angular/router';
import {ResultatenComponent} from './resultaten/resultaten.component';
import {HomeComponent} from './home/home.component';
import {OverMijComponent} from './over-mij/over-mij.component';
import {ProjectenComponent} from './projecten/projecten.component';
import {ContactComponent} from './contact/contact.component';
import {SamenwerkingenComponent} from './samenwerkingen/samenwerkingen.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'resultaten', component: ResultatenComponent },
  { path: 'over-mij', component: OverMijComponent },
  { path: 'projecten', component: ProjectenComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'samenwerkingen', component: SamenwerkingenComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
