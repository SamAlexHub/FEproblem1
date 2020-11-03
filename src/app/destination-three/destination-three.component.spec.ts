import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationThreeComponent } from './destination-three.component';

describe('DestinationThreeComponent', () => {
  let component: DestinationThreeComponent;
  let fixture: ComponentFixture<DestinationThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DestinationThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinationThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
