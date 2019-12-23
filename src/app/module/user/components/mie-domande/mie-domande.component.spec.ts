import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MieDomandeComponent } from './mie-domande.component';

describe('MieDomandeComponent', () => {
  let component: MieDomandeComponent;
  let fixture: ComponentFixture<MieDomandeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MieDomandeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MieDomandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
