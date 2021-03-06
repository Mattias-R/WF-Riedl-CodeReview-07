import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { TravelComponent } from './travel/travel.component';
import { ListComponent } from './list/list.component';

import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { environment } from "../environments/environment";
import { ReactiveFormsModule } from "@angular/forms";
import { TravelService } from "./shared/travel.service";
import { LucernComponent } from './lucern/lucern.component';
import { MunichComponent } from './munich/munich.component';
import { ViennaComponent } from './vienna/vienna.component';
import { KeniaComponent } from './kenia/kenia.component';
import { ZurichComponent } from './zurich/zurich.component';
import { BangkokComponent } from './bangkok/bangkok.component';
import { ForgetComponent } from './forget/forget.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    BlogComponent,
    TravelComponent,
    ListComponent,
    LucernComponent,
    MunichComponent,
    ViennaComponent,
    KeniaComponent,
    ZurichComponent,
    BangkokComponent,
    ForgetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
       AngularFireModule.initializeApp(environment.firebaseConfig),// we called initializeApp function to provide connection details
   AngularFireDatabaseModule // we will import the classes here too
  ],
  providers: [TravelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
