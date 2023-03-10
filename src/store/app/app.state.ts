import { createAction, createReducer, on, props } from "@ngrx/store";
import { Login, ResponseLogin } from "src/models/models";

export interface AppState {
    Usuario: ResponseLogin
}

export const initialAppState: AppState = {
    Usuario: null
}

export const appInsereUsuario = createAction('[App] Insere o usuário logado na aplicação', props<{payload: ResponseLogin}>())
export const appRealizarLogout = createAction('[App] Realiza logout')

export const appReducer = createReducer(
    initialAppState,

    on(appInsereUsuario, (state, {payload}) => {
        state = {
            ...state,
            Usuario: payload
        }

        return state;
    }),

    on(appRealizarLogout, (state) => {
        state = {
            ...state,
            Usuario: null
        }
        
        return state
    })

 
)