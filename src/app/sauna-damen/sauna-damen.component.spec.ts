import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaunaDamenComponent } from './sauna-damen.component';

describe('SaunaDamenComponent', () => {
  let component: SaunaDamenComponent;
  let fixture: ComponentFixture<SaunaDamenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaunaDamenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaunaDamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
