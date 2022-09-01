import { Component } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {

  registerForm = new UntypedFormGroup({
    // numberOrEmail: new FormControl('',Validators.required),
    // nameAndSurname: new FormControl('',Validators.required),
    userName: new UntypedFormControl('',Validators.required),
    password: new UntypedFormControl('',[
      Validators.required,
      Validators.minLength(8),
    ])
  })
  
  

  constructor(public utility:UtilityService,public router:Router) { }


  submitOnRegisterForm(){
    this.utility.registeredUsers.push(this.registerForm.value)
    localStorage.setItem('registeredUsers', JSON.stringify(this.utility.registeredUsers));
    
    // let prova = localStorage.getItem('user');

    console.log(this.registerForm.value,this.utility.registeredUsers)
    // console.log(prova)
    // console.log(this.utility.registeredUsers)
    this.router.navigate(['', 'login']); // redirect to the homepage
    window.alert("Registrazione avvenuta con successo")
  }
}
