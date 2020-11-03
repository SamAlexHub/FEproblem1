import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FalconSearchPageComponent } from './falcon-search-page.component';

describe('FalconSearchPageComponent', () => {
  let component: FalconSearchPageComponent;
  let fixture: ComponentFixture<FalconSearchPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FalconSearchPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FalconSearchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
