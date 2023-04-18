import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DamengymnastikComponent } from './damengymnastik.component';

describe('DamengymnastikComponent', () => {
  let component: DamengymnastikComponent;
  let fixture: ComponentFixture<DamengymnastikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DamengymnastikComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DamengymnastikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
