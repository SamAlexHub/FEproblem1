import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationTwoComponent } from './destination-two.component';

describe('DestinationTwoComponent', () => {
  let component: DestinationTwoComponent;
  let fixture: ComponentFixture<DestinationTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DestinationTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinationTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
