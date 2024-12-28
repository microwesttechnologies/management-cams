import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { slideCustomAnimation } from 'src/app/animations/global.animations';
import { TooltipDirective } from 'src/app/directives/tooltip.directive';
import { SharedModule } from 'src/app/shared-components/shared.module';

interface Card {
  id: number;
  text: string;
  path?: string;
  children?: Card[];
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SharedModule, TooltipDirective],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  animations: [
    slideCustomAnimation('slideEnterDown', 'Y', '1rem', '0', {
      enter: '300ms',
    }),
    slideCustomAnimation('slideEnterLeft', 'X', '-1rem', '0', {
      enter: '300ms',
    }),
  ],
})
export class DashboardComponent {
  public listCards: Card[] = [
    {
      id: 1,
      text: 'Configuración',
      children: [
        { id: 4, text: 'Personas', path: 'people' },
        { id: 5, text: 'Zonas', path: 'zones' },
        { id: 6, text: 'Notificaciones' },
      ],
    },
    {
      id: 2,
      text: 'Monitoreo',
      path: 'monitory',
    },
    {
      id: 3,
      text: 'Historial notificaciones',
      path: 'notifications-history',
    },
  ];

  public selectedListCards: Card[] = this.listCards;
  public isInChildrenView = false;

  private readonly router: Router = inject(Router);

  constructor(){
    const path = window.location.href;

    if(path.includes('zones') || path.includes('people')){
      this.isInChildrenView = true;
      this.selectedListCards = this.listCards[0].children!;
    }
  }

  public selectCard(card: Card): void {
    if (card?.children?.length) {
      this.isInChildrenView = true;
      this.selectedListCards = card.children;
    } else if (card?.path) {
      this.router.navigateByUrl(`/dashboard/${card.path}`);
    }
  }
}
