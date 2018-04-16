import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfopedComponent } from './infoped.component';

describe('InfopedComponent', () => {
  let component: InfopedComponent;
  let fixture: ComponentFixture<InfopedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfopedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfopedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
