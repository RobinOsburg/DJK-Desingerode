import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FussballJugendComponent } from './fussball-jugend.component';

describe('FussballJugendComponent', () => {
  let component: FussballJugendComponent;
  let fixture: ComponentFixture<FussballJugendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FussballJugendComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FussballJugendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
