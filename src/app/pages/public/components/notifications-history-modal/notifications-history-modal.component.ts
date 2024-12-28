import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonComponent } from 'src/app/shared-components/form/button/button.component';
import { InputComponent } from 'src/app/shared-components/form/input/input.component';
import { SelectComponent } from 'src/app/shared-components/form/select/select.component';
import { ModalComponent } from 'src/app/shared-components/modal/modal.component';
import { SharedModule } from 'src/app/shared-components/shared.module';
import { TableComponent } from 'src/app/shared-components/table/table.component';

@Component({
  selector: 'app-notifications-history-modal',
  standalone: true,
  imports: [
    SelectComponent,
    ButtonComponent,
    ModalComponent,
    TableComponent,
    InputComponent,
    SharedModule,
  ],
  templateUrl: './notifications-history-modal.component.html',
  styleUrl: './notifications-history-modal.component.scss',
})
export class NotificationsHistoryModalComponent {
  private readonly router: Router = inject(Router);

  public closeModal(): void {
    this.router.navigateByUrl('/dashboard');
  }
}
