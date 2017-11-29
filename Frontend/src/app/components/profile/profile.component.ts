import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  name :String;
  status: String;
  user : any;
  shop : any;
  collection : any;
  constructor(private userService : UserService) { }

  ngOnInit() {
    this.user = JSON.parse(sessionStorage.getItem('user'));
    this.userService.allShopsByStatus().subscribe(data=>{
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

}