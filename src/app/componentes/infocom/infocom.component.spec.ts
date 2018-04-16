import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfocomComponent } from './infocom.component';

describe('InfocomComponent', () => {
  let component: InfocomComponent;
  let fixture: ComponentFixture<InfocomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfocomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfocomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
