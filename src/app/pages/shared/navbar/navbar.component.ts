import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/providers/services/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoaded = false
  constructor(public _data:DataService, public _router:Router) { }

  ngOnInit(): void {
    this._data.profile().subscribe(
      (data)=> {this._data.userData  = data.data; this._data.isAuthed=true},
      (e)=>{this._data.isAuthed=false, this.isLoaded=true},
      ()=>{ this.isLoaded=true}
    )
  }

}
