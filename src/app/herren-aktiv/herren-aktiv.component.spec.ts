import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerrenAktivComponent } from './herren-aktiv.component';

describe('HerrenAktivComponent', () => {
  let component: HerrenAktivComponent;
  let fixture: ComponentFixture<HerrenAktivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HerrenAktivComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HerrenAktivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
