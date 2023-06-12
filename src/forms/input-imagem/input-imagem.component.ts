import { Component, OnInit, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'input-imagem',
  templateUrl: './input-imagem.component.html',
  styleUrls: ['./input-imagem.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputImagemComponent,
      multi: true
    }
  ]

})
export class InputImagemComponent implements ControlValueAccessor {

  @ViewChild("inputImg") inputImg; 

  public foto;
  private innerValue: File;
  
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
    this.foto = 'data:image/jpeg;base64,' + v
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {

  }

  setDisabledState?(isDisabled: boolean): void {

  }

  public SelecionarImagem(): void {
    this.inputImg.nativeElement.click()
  }

  public RemoverImagem(): void {
    this.value = "";
  }

  onSelectFile(event) { // called each time file input changes
    this.value = event.target.files[0]
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.foto = event.target.result;
        console.log(this.foto)
      }
    }
  }

  private hexToBase64(str) {
    return btoa(String.fromCharCode.apply(null, str.replace(/\r|\n/g, "").replace(/([\da-fA-F]{2}) ?/g, "0x$1 ").replace(/ +$/, "").split(" ")));
}


}
