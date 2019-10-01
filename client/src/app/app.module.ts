import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule }  from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LeaguesComponent } from './leagues/leagues.component';
import { EditComponent } from './edit/edit.component';

const appRoutes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'users/login', component: LoginComponent},
  {path: 'users/register', component: RegisterComponent},
  {path: 'users/edit', component: EditComponent},
  {path: 'leagues', component: LeaguesComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NavComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    LeaguesComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
