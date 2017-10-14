import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { UserServiceService } from './user-service.service';
import { Routes, RouterModule, RouterLinkActive, RouterLink } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: AppComponent },
  { path: 'home', component: UserComponent },
  { path: 'user', component: AddUserComponent },
  { path: 'user/:id', component: AddUserComponent }



];
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AddUserComponent


  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
