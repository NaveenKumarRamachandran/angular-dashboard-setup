import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  userSignIn: User = {
    firstName: '',
    lastName: '',
    password: '',
    email: '',
  };
  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  signIn() {
    console.log(this.userSignIn);
  }

  signUp() {
    console.log(this.userSignIn);
    this.userService.signUp(this.userSignIn).subscribe((response)=>{
      console.log("response data",response.data)
      alert(response.data);
    });
  }
}
