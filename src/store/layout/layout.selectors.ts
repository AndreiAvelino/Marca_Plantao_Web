import { createFeatureSelector } from "@ngrx/store";
import { LayoutState } from "./layout.state";

export const layoutSelect = createFeatureSelector<LayoutState>('layout')