import { Component, Input, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Item } from 'src/models/menu';
import { layoutMudarEstadoSideNav, LayoutState } from 'src/store/layout/layout.state';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input("Item") Item: Item;

  constructor(private route: Router,
              public layoutStore: Store<{layout: LayoutState}>) { }

  ngOnInit(): void {
  }

  public AlterarRota(): void {
    this.layoutStore.dispatch(layoutMudarEstadoSideNav());
    this.route.navigate([this.Item.Rota])
  }

}
