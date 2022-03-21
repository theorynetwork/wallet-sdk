import { StoreOptions } from '@ngxs/store/src/symbols';

import { StateXrplSettingsModel } from './settings.state.model';

export const StateXrplSettingsOptions: StoreOptions<StateXrplSettingsModel> = {
  name: 'xrplSettings',

  defaults: {
    server: null,
    client: null,
    clientOptions: null,
    connectError: null
  }
};
