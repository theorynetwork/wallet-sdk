import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  NgModule,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'tn-transactions',
  templateUrl: './mnemonic.component.html',
  styleUrls: ['./mnemonic.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MnemonicComponent {

}

@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [MnemonicComponent],
  exports: [MnemonicComponent],
})
export class MnemonicComponentModule {}
