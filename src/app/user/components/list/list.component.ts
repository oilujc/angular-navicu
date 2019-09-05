import { Component, OnInit } from '@angular/core';
import { UserService } from "../../services/user.service";
import { User } from '../../models/user';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  user: User
  users = []

  constructor(private userService: UserService) { }

  deleteUser(event) {
    console.log('prueba');
  }

  updateUser(event) {
    console.log('prueba');
  }

  ngOnInit() {
    this.userService.getUserData().subscribe((res:any) => {
      this.users = res.data;
      console.log(this.users);
    })
  }

}
