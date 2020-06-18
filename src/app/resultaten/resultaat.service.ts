import { Injectable } from '@angular/core';
import {Resultaat} from './resultaat';
import {RESULTATEN} from './mock-resultaten';

@Injectable({
  providedIn: 'root'
})
export class ResultaatService {

  constructor() { }

  getResultaten(): Resultaat[] {
    return RESULTATEN;
  }
}
