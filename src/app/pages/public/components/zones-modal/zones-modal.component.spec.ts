import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonesModalComponent } from './zones-modal.component';

describe('ZonesModalComponent', () => {
  let component: ZonesModalComponent;
  let fixture: ComponentFixture<ZonesModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZonesModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ZonesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
