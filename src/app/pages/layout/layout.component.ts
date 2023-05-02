import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  template: `<app-navbar></app-navbar>
             <app-sidebar>
              <router-outlet></router-outlet>
             </app-sidebar>`,
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
