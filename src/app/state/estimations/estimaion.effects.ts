import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  addEstimation
} from './estimation.actions';
import { of, from } from 'rxjs';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { selectAllEstimations } from './estimation.selectors';
import { AppState } from '../app.state';


@Injectable()
export class EstimationEffects {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
  ) {}
}
