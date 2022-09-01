import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  numberOrEmail!:string
  password!:string
  loginForm = new FormGroup({
    numberOrEmail: new FormControl('',Validators.required),
    password: new FormControl('',[
      Validators.required,
    // Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/),
      // Validators.minLength(8),
    ])
  })
  checkCookie!: boolean;
  
 

  constructor(public utility:UtilityService) {
   }

  ngOnInit(): void {
    console.log(this.utility.registeredUsers) // for test
  }
  submitOnLoginForm(){
    this.utility.login(this.loginForm.value.numberOrEmail,this.loginForm.value.password)    
  }

}
