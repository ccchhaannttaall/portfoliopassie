import { Component, OnInit } from '@angular/core';
import {ResultaatService} from './resultaat.service';
import {Resultaat} from './resultaat';

@Component({
  selector: 'app-resultaten',
  templateUrl: './resultaten.component.html',
  styleUrls: ['./resultaten.component.css']
})
export class ResultatenComponent implements OnInit {
  public resultaten: Resultaat[];

  constructor(private resultaatService: ResultaatService) {}

  ngOnInit(): void {
    this.resultaten = this.resultaatService.getResultaten();
  }

}
