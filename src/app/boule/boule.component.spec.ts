import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BouleComponent } from './boule.component';

describe('BouleComponent', () => {
  let component: BouleComponent;
  let fixture: ComponentFixture<BouleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BouleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BouleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
