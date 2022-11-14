import { Component, Input, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Item } from 'src/models/menu';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input("Item") Item: Item;

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  public AlterarRota(): void {
    this.route.navigate([this.Item.Rota])
  }

}
