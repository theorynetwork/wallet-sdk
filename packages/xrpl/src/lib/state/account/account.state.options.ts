import { StoreOptions } from '@ngxs/store/src/symbols';

import { StateXrplAccountModel } from './account.state.model';

export const StateXrplAccountOptions: StoreOptions<StateXrplAccountModel> = {
  name: 'xrplAccount',

  defaults: {
    address: null,
    balances: [],
    error: null,
  }
};
