import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { ActionXrplConnect, PublicServers } from '@theory/xrpl';

@Component({
  selector: 'wallet-sdk-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private store: Store) {}

  public ngOnInit(): void {
    this.store.dispatch(new ActionXrplConnect(PublicServers.TestnetRipple));
  }
}
