import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmar',
  templateUrl: './confirmar.component.html',
  styleUrls: ['./confirmar.component.css']
})
export class ConfirmarComponent implements OnInit {

  public mensagem: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: string,
  ) {
    this.mensagem = data;
  }

  ngOnInit(): void {
  }

}
