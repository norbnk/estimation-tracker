import { createAction, props } from '@ngrx/store';
import { EstimationType } from "../../types/estimation.types";

export const addEstimation = createAction(
  '[Estimation Page] Add Estumation',
  props<{ content: EstimationType }>()
)

export const loadEstimations = createAction('[Estimation Page] Load Estimations');
