import { State, Action, StateContext, Store, Selector } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { Client } from 'xrpl';
import { from, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators'

import { StateXrplAccountModel } from './account.state.model';
import { StateXrplAccountOptions } from './account.state.options';
import { StateXrplSettings } from '../settings';
import { Balance } from '../../interfaces';
import { ActionXrplAccountBalancesGet } from './account.actions';

@State<StateXrplAccountModel>(StateXrplAccountOptions)
@Injectable()
export class StateXrplAccount {

  @Selector() static address(state: StateXrplAccountModel): string | null {
    return state.address;
  }

  @Selector() static balances(state: StateXrplAccountModel): Array<Balance> {
    return state.balances;
  }

  @Selector() static error(state: StateXrplAccountModel): any | null {
    return state.error;
  }

  constructor(
    public store: Store
  ) {}

  @Action(ActionXrplAccountBalancesGet)
  balancesGet(
    { patchState }: StateContext<StateXrplAccountModel>,
    { address, options }: ActionXrplAccountBalancesGet
  ) {
    const isConnected: boolean = this.store.selectSnapshot(StateXrplSettings.isConnected);

    if (!isConnected) {
      throw new Error('XRPL Client is not connected');
    }

    patchState({ address, balances: [], error: null });

    const client: Client = this.store.selectSnapshot(StateXrplSettings.client) as Client;

    return from(client.getBalances(address, options)).pipe(
      tap((balances: Array<{ value: string; currency: string; issuer?: string | undefined }>) =>
        patchState({ balances })
      ),
      catchError((error: any) =>
        of(patchState({ error }))
      )
    );
  }
}
