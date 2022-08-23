import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestrauntsCompComponent } from './restraunts-comp.component';

describe('RestrauntsCompComponent', () => {
  let component: RestrauntsCompComponent;
  let fixture: ComponentFixture<RestrauntsCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestrauntsCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestrauntsCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
