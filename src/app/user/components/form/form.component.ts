import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { UserService } from "../../services/user.service";
import { RolService } from "../../../rol/services/rol.service";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  createOrUpdateUserForm: FormGroup
  idUrl: any
  user: any
  roles = []

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private rolService: RolService,
    private urlParam: ActivatedRoute
  ) {
    this.urlParam.params.subscribe( (params: any) => {
      this.idUrl = params.id
      console.log(this.idUrl)
    });
  }


  ngOnInit() {

    this.createOrUpdateUserForm = this.fb.group({
      name: [''],
      age: [''],
      userType: ['']
    })

    this.getRolData()
    this.getUserData()
  }

  getUserData() {
    this.userService.getUserData().subscribe(( res:any ) => {
      this.user = res.data[0]
      console.log(this.user);

      this.createOrUpdateUserForm.controls.name.setValue(res.data[0].name)
      this.createOrUpdateUserForm.controls.age.setValue(res.data[0].age)
      this.createOrUpdateUserForm.controls.userType.patchValue(res.data[0].rol_id)
    })
  }

  getRolData() {
    this.rolService.getRoles().subscribe(( res:any ) => {
      console.log(res.data);

      this.roles = res.data
    })
  }

}
