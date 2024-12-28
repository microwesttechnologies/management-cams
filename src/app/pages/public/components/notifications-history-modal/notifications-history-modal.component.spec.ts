import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryNotificationsModalComponent } from './notifications-history-modal.component';

describe('HistoryNotificationsModalComponent', () => {
  let component: HistoryNotificationsModalComponent;
  let fixture: ComponentFixture<HistoryNotificationsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoryNotificationsModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HistoryNotificationsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
