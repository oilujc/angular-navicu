import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RolService } from '../../services/rol.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  title:string;
  action:string;
  rol: any;
  rolForm: FormGroup;
  submited: boolean = false;
  errorMessage = null;

  constructor(private activeRoute: ActivatedRoute,
  			  private router: Router,
  			  private fb: FormBuilder,
  			  private rolService: RolService
  			  	) { }

  ngOnInit() {
  	
  	this.rolForm = this.fb.group({
		name: [ '' , Validators.required]
	})

  	this.activeRoute.params.subscribe(params => {
  		console.log(params);
  		if (params.id) {
  			this.title = `Editar rol ${params.id}`;
  			this.action = "Editar";
  			this.getRol(params.id);
  		} else {
  			this.title = `Nuevo rol`;
  			this.action = "Añadir";
  		}
  	});

  }

  get fc() { return this.rolForm.controls }

  getRol(id) {
  	this.rolService.getRoles().subscribe((response:any) => {

  		response.data.forEach((data) => {
  			if (data.id == id) {
  				this.rol = data;
  				this.rolForm.controls.name.setValue(this.rol.name);
  			}
  		});

  	});
  }

}
