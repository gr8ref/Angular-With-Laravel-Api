import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { User } from '../models/user';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: any[];

  constructor(
    private router: Router,
    private ApiService: ApiService
) {
    this.ApiService.isAuthenticated()
}
  ngOnInit() {
    this.listUsers();
  }

  listUsers() {
    this.ApiService.listUsers().subscribe((user: User[]) => {
        this.users = user;
        //console.log(this.users);
    })
}
}
