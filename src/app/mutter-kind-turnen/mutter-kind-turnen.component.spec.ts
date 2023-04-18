import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MutterKindTurnenComponent } from './mutter-kind-turnen.component';

describe('MutterKindTurnenComponent', () => {
  let component: MutterKindTurnenComponent;
  let fixture: ComponentFixture<MutterKindTurnenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MutterKindTurnenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MutterKindTurnenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
