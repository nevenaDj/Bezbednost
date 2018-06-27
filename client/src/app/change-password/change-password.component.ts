import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import { AuthService } from '../login/auth.service';


@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  user: UserPassInterface;
  admin:boolean=false;

  constructor(private auth: AuthService,
              private location: Location,
              private router: Router,
              private toastr: ToastsManager, 
              private vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
    this.user = {
      currentPassword: '',
      newPassword: '',
      checkPassword: ''
    }
   }

  ngOnInit() {
    if (localStorage.getItem('token') == null){
      this.router.navigate(['login']);
    }
    if (this.auth.isAdmin())
      this.admin=true;
  }

  save(model: UserPassInterface, isValid: boolean){
    console.log(this.user);
    console.log(model)
    if (isValid){
      this.auth.changePassword(this.user)
        .then(res => this.location.back())
        .catch(res => this.toastr.error('An error occurred while changing the password.'));
    }
  }

  cancel(){
    this.location.back();
  }

  logout(){
    this.auth.logout();
  }

}
