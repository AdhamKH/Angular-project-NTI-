import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/providers/services/global.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allRoles:any[] = []
  sliders: any[] = [
    "assets/bg2.jpg",    "assets/bg3.jpg",    "assets/bg7.jpg",
  ]
  constructor(public _global:GlobalService) { }

  ngOnInit(): void {
    this.getAllRole()
  }
  getAllRole(){
    this._global.getAllRoles().subscribe(data=>{
      this.allRoles = data.data
      console.log(this.allRoles)
    })
  }
}
