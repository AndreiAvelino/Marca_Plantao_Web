import { createFeatureSelector } from "@ngrx/store";
import { AppState } from "./app.state";

export const selectApp = createFeatureSelector<AppState>('app');