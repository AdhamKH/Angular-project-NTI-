import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm , FormControl} from '@angular/forms';
import { DataService } from 'src/app/providers/services/data.service';

@Component({
  selector: 'app-signup2',
  templateUrl: './signup2.component.html',
  styleUrls: ['./signup2.component.css']
})
export class Signup2Component implements OnInit {

  constructor(private _data:DataService) { }
  // msg=""
  // user = {
  //   firstName:"",
  //   lastName:"",
  //   age:"",
  //   email:"",
  //   gender:"",
  //   password:"",
  //   phone:""
  // }
  ngOnInit(): void {
  }
  signUpForm = new FormGroup({
    firstName:new FormControl(''),
    lastName:new FormControl(''),
    age:new FormControl(''),
    email:new FormControl(''),
    gender:new FormControl(''),
    password:new FormControl(''),
    phone:new FormControl(''),
  })
  onRegister(){
    console.log(this.signUpForm.value)
  }
}
