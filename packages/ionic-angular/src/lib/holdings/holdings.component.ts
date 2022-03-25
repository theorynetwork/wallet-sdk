import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  NgModule,
  OnInit,
  Input,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Store } from '@ngxs/store';
import { ActionXrplConnect, PublicServers } from '@theory/xrpl';

@Component({
  selector: 'tn-holdings',
  templateUrl: './holdings.component.html',
  styleUrls: ['./holdings.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HoldingsComponent implements OnInit {

  @Input()
  public server: PublicServers = PublicServers.TestnetRipple;

  constructor(private store: Store) {}

  public ngOnInit(): void {
    this.store.dispatch(new ActionXrplConnect(this.server));
  }
}

@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [HoldingsComponent],
  exports: [HoldingsComponent],
})
export class HoldingsComponentModule {}
