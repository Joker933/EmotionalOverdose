import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistraceComponent } from './registrace.component';

describe('RegistraceComponent', () => {
  let component: RegistraceComponent;
  let fixture: ComponentFixture<RegistraceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistraceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistraceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
