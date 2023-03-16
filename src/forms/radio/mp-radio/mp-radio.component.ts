import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';


export interface OpcaoRadio {
  Descricao: String,
  Valor: String
}

@Component({
  selector: 'mp-radio',
  templateUrl: './mp-radio.component.html',
  styleUrls: ['./mp-radio.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: MPRadioComponent,
      multi: true
    }
  ]
})
export class MPRadioComponent implements ControlValueAccessor {

  @Input("label") label = "";
  @Input("opcoes") opcoes: Array<OpcaoRadio> = []
  @Input("layout") layout: String = "em-linha";
  @Input("width") width: String = "250";

  @Output() change = new EventEmitter();

  private innerValue;

  get value(){
    return this.innerValue;
  }

  set value(v){
    this.innerValue = v;
    console.log(v)
    this.onChange(v);
  }

  private onChange: (v) => void = () => {}

  constructor() { }
  writeValue(v: any): void {
    this.value = v
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {

  }
  setDisabledState?(isDisabled: boolean): void {

  }

  ngOnInit(): void {
  }

  public EmitirMudanca(event): void{
    this.change.emit(event.value)
  }

}
