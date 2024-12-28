import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonComponent } from 'src/app/shared-components/form/button/button.component';
import { InputComponent } from 'src/app/shared-components/form/input/input.component';
import { SelectComponent } from 'src/app/shared-components/form/select/select.component';
import { ModalComponent } from 'src/app/shared-components/modal/modal.component';
import { SharedModule } from 'src/app/shared-components/shared.module';

@Component({
  selector: 'app-zones-modal',
  standalone: true,
  imports: [
    SelectComponent,
    ButtonComponent,
    ModalComponent,
    InputComponent,
    SharedModule,
  ],
  templateUrl: './zones-modal.component.html',
  styleUrl: './zones-modal.component.scss',
})
export class ZonesModalComponent {
  private readonly router: Router = inject(Router);

  public closeModal(): void {
    this.router.navigateByUrl('/dashboard');
  }
}
