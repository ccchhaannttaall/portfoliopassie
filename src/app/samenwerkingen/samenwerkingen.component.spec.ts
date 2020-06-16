import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamenwerkingenComponent } from './samenwerkingen.component';

describe('SamenwerkingenComponent', () => {
  let component: SamenwerkingenComponent;
  let fixture: ComponentFixture<SamenwerkingenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamenwerkingenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamenwerkingenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
