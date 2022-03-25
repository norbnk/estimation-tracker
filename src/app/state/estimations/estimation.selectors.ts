import { AppState } from "../app.state";
import { createSelector } from "@ngrx/store";
import { EstimationState } from "./estimation.reducer";

export const selectEstimations = (state: AppState) => state.estimations;
export const selectAllEstimations = createSelector(
  selectEstimations,
  (state: EstimationState) => state.estimations
)
