import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment'
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  env = environment

  constructor(private http: HttpClient) { }

  getRoles() {
    return this.http.get(`${this.env.apiUrl}roles/`);
  }

  getRolById(id: number) {
    return this.http.get(`${this.env.apiUrl}roles/`);
  }

}
