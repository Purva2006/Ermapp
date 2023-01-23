import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TitleComponent } from './title/title.component';
import { AgePipe } from './pipes/age.pipe';
import { IncrementPipe } from './pipes/increment.pipe';
import { DelTextDirective } from './directies/del-text.directive';
import { FormsModule } from '@angular/forms';
import { GridListComponent } from './grid-list/grid-list.component';
import { EmpCardComponent } from './emp-card/emp-card.component';
import { EmpFormComponent } from './emp-form/emp-form.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { Route, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmpDetailComponent } from './emp-detail/emp-detail.component';

let routes:Route[]=[
  {path:"",redirectTo:"/home",pathMatch:"full"},
  {path:'home', component:HomeComponent},
  {path:'list', component:GridListComponent},
  {path:'add', component:EmpFormComponent},
  {path:'aboutus', component:AboutUsComponent},
  {path:'contactus', component:ContactUsComponent},
  {path:'detail/:id', component:EmpDetailComponent},
  {path:'update/:id', component:EmpFormComponent},
  {path:'**',component:PageNotFoundComponent}




]

@NgModule({

      //use to declare the component,pipe,directive of current module

  declarations: [
    AppComponent,
    ListComponent,
    HomeComponent,
    NavbarComponent,
    TitleComponent,
    AgePipe,
    IncrementPipe,
    DelTextDirective,

    GridListComponent,
     EmpCardComponent,
     EmpFormComponent,
     AboutUsComponent,
     ContactUsComponent,
     EmpDetailComponent,
  
  ],

  //use to declare the built-in module or another of angular API
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],

  //use to declare bootstrap
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
