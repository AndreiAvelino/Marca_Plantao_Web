import { Component, inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-padrao',
  template: ''
})
export class PadraoComponent implements OnInit {

  public layoutStore = inject(Store)
  public dialog = inject(MatDialog)
  public toastr = inject(ToastrService)

  constructor() { }

  ngOnInit(): void {
  }

  public MensagemSucesso(mensagem: string){
    this.toastr.success(mensagem);
  }

  public MensagemErro(mensagem: string){
    this.toastr.error(mensagem);
  }

}
