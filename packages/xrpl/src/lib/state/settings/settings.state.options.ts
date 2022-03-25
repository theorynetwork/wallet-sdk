import { StoreOptions } from '@ngxs/store/src/symbols';
import { ConnectionStatus } from '../../enums';

import { StateXrplSettingsModel } from './settings.state.model';

export const StateXrplSettingsOptions: StoreOptions<StateXrplSettingsModel> = {
  name: 'xrplSettings',

  defaults: {
    server: null,
    client: null,
    clientOptions: null,
    connectError: null,
    connectionStatus: ConnectionStatus.Disconnected
  }
};
