import { Component, OnInit } from '@angular/core';
import {ProjectService} from './project.service';
import {Project} from './project';

@Component({
  selector: 'app-projecten',
  templateUrl: './projecten.component.html',
  styleUrls: ['./projecten.component.css']
})
export class ProjectenComponent implements OnInit {

  public projecten: Project[];

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.projecten = this.projectService.getProjecten();
  }

}
