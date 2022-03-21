import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { Wallet } from 'xrpl';
import * as bip39 from 'bip39';

import { StateXrplWalletModel } from './wallet.state.model';
import { StateAccountOptions } from './wallet.state.options';
import { ActionXrplWalletCreate, ActionXrplWalletMnemonicGenerate } from './wallet.actions';
import { MnemonicType } from '../../enums';

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
    { patchState }: StateContext<StateXrplWalletModel>,
    { type, language }: ActionXrplWalletMnemonicGenerate
  ) {
    patchState({ mnemonic: null });

    let mnemonic: string | null = null;

    if (type === MnemonicType.bip39) {
      bip39.setDefaultWordlist(language);

      mnemonic = bip39.generateMnemonic();
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
