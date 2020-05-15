import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideContactComponent } from './side-contact.component';

describe('SideContactComponent', () => {
  let component: SideContactComponent;
  let fixture: ComponentFixture<SideContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
