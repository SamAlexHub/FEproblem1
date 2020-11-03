import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationOneComponent } from './destination-one.component';

describe('DestinationOneComponent', () => {
  let component: DestinationOneComponent;
  let fixture: ComponentFixture<DestinationOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DestinationOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinationOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
