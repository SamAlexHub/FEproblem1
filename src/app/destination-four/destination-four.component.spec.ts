import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationFourComponent } from './destination-four.component';

describe('DestinationFourComponent', () => {
  let component: DestinationFourComponent;
  let fixture: ComponentFixture<DestinationFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DestinationFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinationFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
