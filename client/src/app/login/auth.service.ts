import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import * as decode from 'jwt-decode';

@Injectable()
export class AuthService {

  private roles: string[];

  constructor(private http: HttpClient,
              private router: Router) { }

  login(username:string, password:string): Promise<any>{
    return this.http
    .post('/api/login', {username, password}, {responseType: 'text'})
    .toPromise()
    .then(res => {
      console.log('sucess login ') 
      localStorage.setItem('token', res);
      this.setRoles(); }
    )
    .catch(this.handleError);
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  redirect(): void {
    if (localStorage.getItem('token') == null){
      this.router.navigate(['login']);
    }else if (this.isAdmin()){
      this.router.navigate(['home']);
    } else 
    this.router.navigate(['user/home']);
  }

    isAdmin(): boolean {
    return this.roles.includes('ROLE_ADMIN');
  }

  isUser(): boolean {
    return this.roles.includes('ROLE_USER');
  }


  private setRoles(): void {
    const token = localStorage.getItem('token');
    const tokenPayload = decode(token);
    this.roles=[]
    for (let a of tokenPayload.auth)
    this.roles.push(a['authority']);
  }

  me(): Promise<any>{
    return this.http
    .get('/api/me')
    .toPromise()
    .then(res => res)
    .catch(this.handleError);
  }

  changePassword (user: UserPassInterface): Promise<any>{
    return this.http
    .post('/api/password', user)
    .toPromise()
    .then(res => res)
    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
