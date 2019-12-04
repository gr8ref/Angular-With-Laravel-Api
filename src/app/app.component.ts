import { Component } from '@angular/core';
import {ApiService} from '../app/api.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'al';
  constructor(
    private router: Router,
    private ApiService: ApiService,
    public route: ActivatedRoute
) {
  }
}
