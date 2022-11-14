import { ControlErros } from "src/models/form"

export interface FormError {

    SetErros(Controls: Array<ControlErros>): void 

    GetErro(Control: String): ControlErros

}