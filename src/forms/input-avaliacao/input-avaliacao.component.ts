import { Component, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

interface Estrela {
  Status: boolean,
  Rank: number
}

@Component({
  selector: 'input-avaliacao',
  templateUrl: './input-avaliacao.component.html',
  styleUrls: ['./input-avaliacao.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputAvaliacaoComponent,
      multi: true
    }
  ]
})
export class InputAvaliacaoComponent implements ControlValueAccessor {

  public Estrelas: Array<Estrela> = [
    {
      Status: false,
      Rank: 1
    },
    {
      Status: false,
      Rank: 2
    },
    {
      Status: false,
      Rank: 3
    },
    {
      Status: false,
      Rank: 4
    },
    {
      Status: false,
      Rank: 5
    },
  ]

  private innerValue: number

  get value(){
    return this.innerValue
  }

  set value(v: number){
    this.innerValue = v;
    this.onChange(this.innerValue)
  }

  public onChange: (value: number) => void = () => {};

  constructor() {}

  writeValue(v: number): void {
    this.onChange(this.innerValue);
  }
  registerOnChange(fn: any): void {
    this.onChange =fn;
  }

  registerOnTouched(fn: any): void {

  }
  setDisabledState?(isDisabled: boolean): void {

  }

  public AlterarNota(Estrela: Estrela): void{

    this.value = Estrela.Rank;

    this.Estrelas = this.Estrelas.map(e => {
      return {
        ...e,
        Status: Estrela.Rank >= e.Rank
      }
    })
  }


  

}
