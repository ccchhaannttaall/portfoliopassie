import { Injectable } from '@angular/core';
import {Project} from './project';
import {PROJECTEN} from './mock-projecten';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  getProjecten(): Project[] {
    return PROJECTEN;
  }
}
