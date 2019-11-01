import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
  MatToolbarModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatTableModule,
} from "@angular/material";
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SWAPIService } from './services/swapi.service';
import { HttpClientModule } from '@angular/common/http';
import { PersonDetailComponent } from './components/person-detail/person-detail.component';
/*
import { PersonDetailComponent } from './components/person-detail/person-detail.component';
*/
const routes = [
  { /*path: 'person', component: PersonDetailComponent */
path: 'name' , component: SearchBarComponent
},
{ path: 'person', component: PersonDetailComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchBarComponent,
    PersonDetailComponent,
   /* PersonDetailComponent */
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    HttpClientModule

  ],
  providers: [
  SWAPIService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
