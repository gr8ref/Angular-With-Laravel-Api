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
  user = JSON.parse(localStorage.getItem("user"));
  user_id = this.user.id

  constructor(    
    private router: Router,
    private ApiService: ApiService) 
    {
      this.ApiService.isAuthenticated();
      this.allOrders();
    }

  ngOnInit() {
    

  }


  allOrders() {

    this.ApiService.listOrders()

    .subscribe((response: any) => {
      
      console.log(response);
     
    }, () => {
      console.log('Error', )
      
    });

}

userOrdersById(user_id){
  
  this.ApiService.listOrderById(user_id)

  .subscribe((response: any) => {
    
    console.log(response);
   
  }, () => {
    console.log('Error', )
    
  });
      
}


}
