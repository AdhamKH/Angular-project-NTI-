import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { DataService } from 'src/app/providers/services/data.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  image:any="assets/4.jpg"
  signupForm= new FormGroup({
      firstName: new FormControl('',[Validators.required, Validators.minLength(6),Validators.maxLength(25)]),
      lastName: new FormControl('',[Validators.required, Validators.minLength(6),Validators.maxLength(25)]),
      email: new FormControl('',[Validators.required,Validators.email]),
      age: new FormControl('',[Validators.min(21)]),
      password: new FormControl('',Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')),
      gender: new FormControl('',Validators.required),
      status: new FormControl('female',),
      type:new FormControl('user')

    })

  constructor(private _data:DataService,private router:Router) { }

  ngOnInit(): void {
  }
  get firstName(){ return this.signupForm.get("firstName")}
  get lastName(){ return this.signupForm.get("lastName")}
  get email(){ return this.signupForm.get("email")}
  get age(){ return this.signupForm.get("age")}
  get password(){ return this.signupForm.get("password")}
  get gender(){ return this.signupForm.get("gender")}
  signup(){
    this._data.register(this.signupForm.value).subscribe(
      (data)=>{},
      (e)=>{console.log(e)},
      ()=>{
        this.router.navigate(["user/login"])
      }
    )
  }


}

