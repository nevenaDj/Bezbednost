
import { Component, OnInit, ViewContainerRef} from '@angular/core';
import { Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: CredentialsInterface;

  constructor(private auth: AuthService,
              private router: Router,
              private toastr: ToastsManager, 
              private vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
    this.user = {
      username: '',
      password: ''
    }
   }

  ngOnInit() {
  }

  login(){
    localStorage.removeItem('token');
    this.auth.login(this.user.username, this.user.password)
        .then(res => {
          this.auth.me().
            then(m => {
              for (let a of m.roles){
                if (a["name"] == 'ROLE_ADMIN'){
                  this.router.navigate(['/home'])
                }
                if (a["name"] == 'ROLE_USER'){
                  this.router.navigate(['/user/home'])
                }
              }
      })
    })
        .catch(res =>
          { 
            console.log(res.status);
            console.log(res);
            if (res == 'Http failure response for https://localhost:8443/api/login: 422 OK'){ 
              this.toastr.error('User is disabled.');
            }else{
              this.toastr.error('Invalid username/password.');
            }
        });
  }

}
