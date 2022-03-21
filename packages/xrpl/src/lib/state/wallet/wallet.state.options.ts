import { StoreOptions } from '@ngxs/store/src/symbols';

import { StateXrplWalletModel } from './wallet.state.model';

export const StateAccountOptions: StoreOptions<StateXrplWalletModel> = {
  name: 'xrplWallet',

  defaults: {
    mnemonic: null,
    wallet: null,
  }
};
