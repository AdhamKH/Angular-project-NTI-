import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/providers/services/data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private _data:DataService) { }

  ngOnInit(): void {
  }

}
