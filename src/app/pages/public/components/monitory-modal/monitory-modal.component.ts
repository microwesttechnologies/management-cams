import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonComponent } from 'src/app/shared-components/form/button/button.component';
import { SelectComponent } from 'src/app/shared-components/form/select/select.component';
import { ModalComponent } from 'src/app/shared-components/modal/modal.component';
import { SharedModule } from 'src/app/shared-components/shared.module';

@Component({
  selector: 'app-monitory-modal',
  standalone: true,
  imports: [SharedModule, ModalComponent, SelectComponent, ButtonComponent],
  templateUrl: './monitory-modal.component.html',
  styleUrl: './monitory-modal.component.scss',
})
export class MonitoryModalComponent {
  private readonly router: Router = inject(Router);

  public closeModal(): void {
    this.router.navigateByUrl('/dashboard');
  }
}
