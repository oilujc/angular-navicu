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

  constructor(private userService: UserService) {
    console.log(this.userService);

  }

  ngOnInit() {
    // this.userService.getDataUser().subscribe(res => {
    //   console.log(res);
    // })
  }

}
