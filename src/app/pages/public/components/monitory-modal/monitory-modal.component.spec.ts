import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitoryModalComponent } from './monitory-modal.component';

describe('MonitoryModalComponent', () => {
  let component: MonitoryModalComponent;
  let fixture: ComponentFixture<MonitoryModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonitoryModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonitoryModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
