import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarltComponent } from './barlt.component';

describe('BarltComponent', () => {
  let component: BarltComponent;
  let fixture: ComponentFixture<BarltComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarltComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
