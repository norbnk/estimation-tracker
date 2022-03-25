import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { EstimationType } from "../../types/estimation.types";
import {Store} from "@ngrx/store";
import { selectAllEstimations } from "../../state/estimations/estimation.selectors";
import { addEstimation } from "../../state/estimations/estimation.actions";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  estimationTicketGroup = new FormGroup({
    ticket: new FormControl('', [Validators.required]),
    estimation: new FormControl('', [Validators.required]),
  })

  public allEstimations$ = this.store.select(selectAllEstimations);
  public estimations: EstimationType[] = [];

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  saveEstimation(): void {
    if(this.estimationTicketGroup.status === 'VALID') {
      const estimation = {
        ticket: this.estimationTicketGroup.controls['ticket'].value,
        estimation: this.estimationTicketGroup.controls['estimation'].value,
      };

      this.store.dispatch(addEstimation({ content: estimation}))
    }
  }

}
