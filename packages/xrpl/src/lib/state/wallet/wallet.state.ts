import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { Wallet } from 'xrpl';
import { mnemonicGenerate, mnemonicValidate } from '@polkadot/util-crypto';

import { StateXrplWalletModel } from './wallet.state.model';
import { StateAccountOptions } from './wallet.state.options';
import { ActionXrplWalletCreate, ActionXrplWalletMnemonicGenerate } from './wallet.actions';

@State<StateXrplWalletModel>(StateAccountOptions)
@Injectable()
export class StateXrplWallet {
  @Selector() static mnemonic(state: StateXrplWalletModel): string | null {
    return state.mnemonic;
  }
  @Selector() static wallet(state: StateXrplWalletModel): Wallet | null {
    return state.wallet;
  }

  @Action(ActionXrplWalletMnemonicGenerate)
  mnemonicGenerate(
    { patchState }: StateContext<StateXrplWalletModel>
  ) {
    patchState({ mnemonic: null });

    const mnemonic: string = mnemonicGenerate();

    if (!mnemonicValidate(mnemonic)) {
        throw new Error('Generated mnemonic failed');
    }

    patchState({ mnemonic });

    return mnemonic;
  }

  @Action(ActionXrplWalletCreate)
  walletCreate(
    { patchState, getState }: StateContext<StateXrplWalletModel>,
    { mnemonic }: ActionXrplWalletCreate
  ) {
    mnemonic = mnemonic || StateXrplWallet.mnemonic(getState());

    if (mnemonic == null) {
      throw new Error('No mnemonic provided');
    }

    patchState({ mnemonic });

    const wallet: Wallet = Wallet.fromMnemonic(mnemonic);

    patchState({ wallet });
  }
}
