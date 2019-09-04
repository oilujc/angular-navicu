import { Component, OnInit } from '@angular/core';

import { RolService } from '../../services/rol.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  roles:any = [];

  constructor(private rolService: RolService) { }

  ngOnInit() {

  	this.rolService.getRoles().subscribe((response:any) => {

  		console.log(response);

  		this.roles = response.data;

  	});


  }	

}
