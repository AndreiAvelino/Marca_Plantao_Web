import { createAction, createReducer, on, props } from "@ngrx/store";

export interface LayoutState {
    SidenavState: boolean;
}

export const initialLayoutState: LayoutState = {
    SidenavState: false
}

export const layoutMudarEstadoSideNav = createAction('[Layout] Muda o estado da sidenav')

export const layoutReducer = createReducer(
    initialLayoutState,

    on(layoutMudarEstadoSideNav, state => {
        state = {
            ...state,
            SidenavState: !state.SidenavState
        }

        return state;
    })
)