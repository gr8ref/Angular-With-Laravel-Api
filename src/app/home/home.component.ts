import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //user: any;

  constructor(    
    private router: Router,
    private ApiService: ApiService) 
    {
      this.ApiService.isAuthenticated();
    }

  ngOnInit() {
  }





}
