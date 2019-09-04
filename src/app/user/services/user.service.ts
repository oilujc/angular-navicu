import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'  // <- ADD THIS
})

export class UserService {

  env = environment
  constructor(private http: HttpClient) { }

  getDataUser() {
    // return this.users
    return this.http.get(`${this.env.apiUrl}users/`)
  }

}
