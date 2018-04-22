import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComcardComponent } from './comcard.component';

describe('ComcardComponent', () => {
  let component: ComcardComponent;
  let fixture: ComponentFixture<ComcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
