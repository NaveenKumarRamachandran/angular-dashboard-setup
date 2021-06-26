import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  userSignIn: User = {
    firstName: '',
    lastName: '',
    password: '',
    email: '',
  };
  constructor(private router: Router, private userService: UserService) {}

  ngOnInit(): void {}

  signIn() {
    console.log(this.userSignIn);
    this.userService.signIn(this.userSignIn).subscribe((response) => {
      localStorage.setItem("UserAccessToken",response.accessToken); 
      localStorage.setItem("UserName",response.user.name);
      localStorage.setItem("email",response.user.email);    
      return this.router.navigate(['/user']);
    });
  }

  signUp() {
    return this.router.navigate(['/signup']);
  }
}
