import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { UserService } from "../../services/user.service";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  createOrUpdateUserForm: FormGroup
  idUrl: any
  roles = [1, 2, 3]

  constructor(
    private fb: FormBuilder,
    private http: UserService,
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

    this.getData()
  }

  getData() {
    this.http.getDataUser().subscribe(( res:any ) => {
      console.log(res.data[0]);

      this.createOrUpdateUserForm.controls.name.setValue(res.data[0].name)
      this.createOrUpdateUserForm.controls.age.setValue(res.data[0].age)
    })
  }

}
