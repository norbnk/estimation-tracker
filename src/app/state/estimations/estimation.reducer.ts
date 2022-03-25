import { EstimationType } from "../../types/estimation.types";
import { createReducer, on } from "@ngrx/store";
import { addEstimation } from "./estimation.actions";


export interface EstimationState {
  estimations: EstimationType[];
}

export const initialState: EstimationState = {
  estimations: []
}

export const estimationReducer = createReducer(
  initialState,
  on(addEstimation, (state, { content }) => ({
    ...state,
    estimations: [...state.estimations, { id: Date.now().toString(), content: content}],
  }))

)
