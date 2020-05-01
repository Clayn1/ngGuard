import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'ngGuard';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  changeRoute(input: HTMLInputElement) {
    this.router.navigate([input.value]);
  }
}
