import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/providers/services/data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
    userData:any={}
  constructor(private _data:DataService) { }

  ngOnInit(): void {
    this._data.profile().subscribe(
      (data)=>{console.log(data)
         this.userData=data.data}
    )
  }

}
