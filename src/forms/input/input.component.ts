import { Component, Input, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputComponent,
      multi: true
    }
  ]
})
export class InputComponent implements OnInit, ControlValueAccessor {

  @ViewChildren('erro') err

  private innerValue: any;

  get value(){
    return this.innerValue;
  }

  set value(v: any){
    this.innerValue = v;
    this.onChange(this.innerValue); 
  }

  public onChange: (value: String) => void = () => {};

  @Input('label') label: String = "";
  @Input('type') type: String = "text";
  @Input('placeholder') placeholder: String = "";
  @Input('control') control;
  @Input('erros') erros;
  @Input('mask') mask = "";
  @Input('appearance') appearance = "outline";

  constructor() { }



  writeValue(obj: String): void {
    this.value = obj;
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

  
}
