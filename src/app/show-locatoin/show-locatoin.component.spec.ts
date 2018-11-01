import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowLocatoinComponent } from './show-locatoin.component';

describe('ShowLocatoinComponent', () => {
  let component: ShowLocatoinComponent;
  let fixture: ComponentFixture<ShowLocatoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowLocatoinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowLocatoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
