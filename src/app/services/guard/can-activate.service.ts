import {Injectable} from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {UserService} from '../user.service';
import {HttpClient} from '@angular/common/http';
import {UserModel} from '../../models/UserModel';

@Injectable({
  providedIn: 'root'
})
export class CanActivateService implements CanActivate {

  user;

  constructor(private userService: UserService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree>
    | boolean | UrlTree {
    // this.userService.getUser(state.url).subscribe(value => console.log(value),
    //   error => {
    //   this.error = error;
    //   console.log('NO SUCH USER');
    // });
    // return !this.error;
    return !(+state.url.slice(1) > 10 || +state.url.slice(1) < 1);
  }
}
