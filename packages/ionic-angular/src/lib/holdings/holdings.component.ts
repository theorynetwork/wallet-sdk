import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  NgModule,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'tn-holdings',
  templateUrl: './holdings.component.html',
  styleUrls: ['./holdings.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HoldingsComponent {

}

@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [HoldingsComponent],
  exports: [HoldingsComponent],
})
export class HoldingsComponentModule {}
