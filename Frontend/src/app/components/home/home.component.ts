import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit { 
  name: String;
  status : String; 
  collection : any;
  shop : any;
  constructor(private userService : UserService) { }

  ngOnInit() {
      this.userService.allShops().subscribe(data=>{
      this.collection = data;
    });
  }
  
  onDislike(e){
    const shop = {
      id :e.id,
      name : e.name,
      status : 'dislike'
    }
    this.userService.updateShop(shop).subscribe(data=>{
      window.location.reload();
    })
  }

  onLike(e){
    const shop = {
      id :e.id,
      name : e.name,
      status : 'like'
    }
    this.userService.updateShop(shop).subscribe(data=>{
      window.location.reload();
    })
  }
}