import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/providers/services/data.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {

  constructor(private _data:DataService) { }

  ngOnInit(): void {
  }

}
