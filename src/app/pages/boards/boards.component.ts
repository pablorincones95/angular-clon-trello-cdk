import { Component } from '@angular/core';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrello } from '@fortawesome/free-brands-svg-icons';
import {
  faAngleDown,
  faAngleUp,
  faBorderAll,
  faBox,
  faClock,
  faGear,
  faHeart,
  faUsers,
  faWaveSquare,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-boards',
  standalone: true,
  imports: [NavbarComponent, FontAwesomeModule, CdkAccordionModule],
  templateUrl: './boards.component.html',
  styleUrl: './boards.component.scss',
})
export class BoardsComponent {
  public faTrello = faTrello;
  public faBox = faBox;
  public faWaveSquare = faWaveSquare;
  public faClock = faClock;
  public faAngleUp = faAngleUp;
  public faAngleDown = faAngleDown;
  public faHeart = faHeart;
  public faBorderAll = faBorderAll;
  public faUsers = faUsers;
  public faGear = faGear;

  items = [
    {
      label: 'Item 1',
      items: [
        {
          label: 'Sub Item 1.1',
        },
        {
          label: 'Sub Item 1.2',
        },
      ],
    },
    {
      label: 'Item 2',
      items: [
        {
          label: 'Sub Item 2.1',
        },
        {
          label: 'Sub Item 2.2',
        },
      ],
    },
    {
      label: 'Item 3',
      items: [
        {
          label: 'Sub Item 3.1',
        },
        {
          label: 'Sub Item 3.2',
        },
      ],
    },
  ];

  expandedIndex = 0;
}
