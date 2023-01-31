import { Component, inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-padrao',
  template: ''
})
export class PadraoComponent implements OnInit {

  public layoutStore = inject(Store)
  public dialog = inject(MatDialog)

  constructor() { }

  ngOnInit(): void {
  }

}
