import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonComponent } from 'src/app/shared-components/form/button/button.component';
import { SelectComponent } from 'src/app/shared-components/form/select/select.component';
import { ModalComponent } from 'src/app/shared-components/modal/modal.component';
import { SharedModule } from 'src/app/shared-components/shared.module';

@Component({
  selector: 'app-people-modal',
  standalone: true,
  imports: [SharedModule, ModalComponent, SelectComponent, ButtonComponent],
  templateUrl: './people-modal.component.html',
  styleUrl: './people-modal.component.scss',
})
export class PeopleModalComponent {
  private readonly router: Router = inject(Router);

  public closeModal(): void {
    this.router.navigateByUrl('/dashboard');
  }
}
