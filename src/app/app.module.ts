import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { UserComponent } from './user/user.component';
import {CanActivateService} from './services/guard/can-activate.service';
import {FormsModule} from '@angular/forms';
import {UserResolverService} from './services/user-resolver.service';
import {HttpClientModule} from '@angular/common/http';

const routes: Routes = [{
  path: ':id', component: UserComponent, resolve: {user: UserResolverService}, canActivate: [CanActivateService]
}];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
