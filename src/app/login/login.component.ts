import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  numberOrEmail!:string
  password!:string
  loginForm = new UntypedFormGroup({
    numberOrEmail: new UntypedFormControl('',Validators.required),
    password: new UntypedFormControl('',[
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
