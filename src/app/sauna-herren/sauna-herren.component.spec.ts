import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaunaHerrenComponent } from './sauna-herren.component';

describe('SaunaHerrenComponent', () => {
  let component: SaunaHerrenComponent;
  let fixture: ComponentFixture<SaunaHerrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaunaHerrenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaunaHerrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
