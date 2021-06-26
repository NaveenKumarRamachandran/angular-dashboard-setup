import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  
  constructor(private router: Router, private userService: UserService) {
    this.verify();
  }

  ngOnInit(): void {}

  verify() {
    localStorage.getItem("UserAccessToken"); 
    localStorage.getItem("UserName");
    localStorage.getItem("email");  
    
    this.userService.verify().subscribe((response) => {
      console.log("response",response);
      return this.router.navigate(['/login']);
    });
  }
}
