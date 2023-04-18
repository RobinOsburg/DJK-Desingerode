import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FussballHerrenComponent } from './fussball-herren.component';

describe('FussballHerrenComponent', () => {
  let component: FussballHerrenComponent;
  let fixture: ComponentFixture<FussballHerrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FussballHerrenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FussballHerrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
