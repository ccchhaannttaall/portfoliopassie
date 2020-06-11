import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigatiebarComponent } from './navigatiebar.component';

describe('OverMijComponent', () => {
  let component: NavigatiebarComponent;
  let fixture: ComponentFixture<NavigatiebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NavigatiebarComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigatiebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
