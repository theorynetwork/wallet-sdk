import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { Client, ClientOptions, ConnectionError, ValidationError, XrplError } from 'xrpl';
import { of } from 'rxjs';
import { catchError, switchMap, tap } from 'rxjs/operators';

import { PublicServers } from '../../enums';
import { StateXrplSettingsModel } from './settings.state.model';
import { StateXrplSettingsOptions } from './settings.state.options';
import {
  ActionXrplConnect
} from './settings.actions';

@State<StateXrplSettingsModel>(StateXrplSettingsOptions)
@Injectable()
export class StateXrplSettings {

  @Selector() static server(state: StateXrplSettingsModel): PublicServers | string | null {
    return state.server;
  }
  @Selector() static client(state: StateXrplSettingsModel): Client | null {
    return state.client;
  }
  @Selector() static clientOptions(state: StateXrplSettingsModel): ClientOptions | null {
    return state.clientOptions;
  }
  @Selector() static connectError(state: StateXrplSettingsModel): ValidationError | ConnectionError | XrplError | null {
    return state.connectError;
  }
  @Selector() static isConnected(state: StateXrplSettingsModel): boolean {
    return state.client != null && state.connectError == null && state.client.isConnected();
  }

  @Action(ActionXrplConnect)
  connect(
    { patchState }: StateContext<StateXrplSettingsModel>,
    { server, options }: ActionXrplConnect
  ) {
    patchState({ server: null, client: null, clientOptions: null, connectError: null });

    return of(new Client(server as string, options)).pipe(
      tap((client: Client) =>
        patchState({ server, client, clientOptions: options})
      ),
      switchMap((client: Client) =>
        client.connect()
      ),
      catchError((error: any) =>
        of(patchState({ connectError: error}))
      )
    )
  }
}
