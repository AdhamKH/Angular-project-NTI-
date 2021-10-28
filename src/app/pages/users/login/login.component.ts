import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/providers/services/data.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errLogin =""
loginForm= new FormGroup({
  email:new FormControl('',[Validators.required, Validators.email]),
  password:new FormControl('',[Validators.required])
})

  constructor(private _data:DataService,private router:Router) { }
  get email(){ return this.loginForm.get("email")}
  get password(){ return this.loginForm.get("password")}
  ngOnInit(): void {
  }
  login(){
    if (this.loginForm.valid){
      this._data.login(this.loginForm.value).subscribe(
        (data)=>{ localStorage.setItem('testToken', data.data.token),console.log(data.data)},
        (e)=>{console.log(e); this.errLogin=e.error.data},
        ()=>{
          this.errLogin=""
          this.router.navigate(["/user"])

        }
      )
    }
  }
  }

