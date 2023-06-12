import { Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-adicionar-arquivo-produto',
  templateUrl: './adicionar-arquivo-produto.component.html',
  styleUrls: ['./adicionar-arquivo-produto.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: AdicionarArquivoProdutoComponent,
      multi: true
    }
  ]
})
export class AdicionarArquivoProdutoComponent implements ControlValueAccessor {
  
  public arquivo;
  private innerValue: File;

  @Input('descricao') descricao: string
  @Input('icon') icon: string; 

  onChange: (v: any) => void = () => {}

  get value() {
    return this.innerValue
  }

  set value(v: any) {
    this.innerValue = v;
    this.onChange(v);
  }


  constructor() { }
  writeValue(v: any): void {
    this.value = v;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {

  }

  setDisabledState?(isDisabled: boolean): void {

  }


  public AbrirCaixaArquivos() {
    document.getElementById('selectFiles').click();
  }

  async ArquivosSelecionados(event: any) {
    this.arquivo = event.target.files[0].name
    this.value = event.target.files[0]
  }
  
  public ExcluirArquivo(){
    (<HTMLInputElement>document.getElementById('selectFiles')).value = ""
    this.arquivo = "";
  }

  

}
