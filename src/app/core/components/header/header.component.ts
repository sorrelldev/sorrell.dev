import { Component, ChangeDetectionStrategy } from '@angular/core'
import { GlobalState } from '../../state'

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  constructor(public globalState: GlobalState) {}

  HandleSidenav(): void {
    this.globalState.sidenav$.next(true);
  }
}
