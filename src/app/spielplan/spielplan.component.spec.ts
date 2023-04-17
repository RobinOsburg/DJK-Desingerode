import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpielplanComponent } from './spielplan.component';

describe('SpielplanComponent', () => {
  let component: SpielplanComponent;
  let fixture: ComponentFixture<SpielplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpielplanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpielplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
