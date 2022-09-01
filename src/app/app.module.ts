import { NgModule,  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CookieService } from 'ngx-cookie-service';
import { UserpageComponent } from './userpage/userpage.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { NgxPermissionsModule } from 'ngx-permissions';
import { StoryComponent } from './story/story.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    LoginComponent,
    RegisterComponent,
    UserpageComponent,
    AdminpageComponent,
    PagenotfoundComponent,
    StoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPermissionsModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { 

 

}
