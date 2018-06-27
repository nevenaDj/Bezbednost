import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  constructor(private auth: AuthService,
    private router: Router) { }

    ngOnInit() {
    this.auth.redirect(); 
    }

    logout(){
    this.auth.logout();
    }

    me(){
    this.auth.me()
    .then(res => console.log(res));
    }

    changePassword(){
    this.router.navigate(['password']);
    }
}
