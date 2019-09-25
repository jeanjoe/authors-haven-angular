import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { ArticlesModule } from 'src/app/core/articles/articles.module';
import { HeaderComponent } from 'src/app/core/layouts/header/header.component';
import { HomeComponent } from 'src/app/core/home/home.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from 'src/app/core/auth/login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ProfileModule } from 'src/app/core/profile/profile.module';
import { ErrorInterceptor } from 'src/app/core/helpers/error.interceptor';
import { JwtInterceptor } from 'src/app/core/helpers/jwt.interceptor';
import { RegisterComponent } from './core/auth/register/register.component';
import { FooterComponent } from './core/layouts/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ArticlesModule,
    ProfileModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true  },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
