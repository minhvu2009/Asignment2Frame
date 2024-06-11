import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DasComponent } from './das.component';

describe('DasComponent', () => {
  let component: DasComponent;
  let fixture: ComponentFixture<DasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
