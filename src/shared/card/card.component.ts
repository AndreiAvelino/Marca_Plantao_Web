import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() color: string;
  @Input() titulo: string;
  @Input() descricao: string;

  constructor() {
    
  }

  ngOnInit(): void {

  }

}
