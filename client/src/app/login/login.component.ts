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
    this.auth.login(this.user.username, this.user.password)
        .then(res => this.router.navigate(['/home']))
        .catch(res => this.toastr.error('Invalid username/password.'));
  }

}