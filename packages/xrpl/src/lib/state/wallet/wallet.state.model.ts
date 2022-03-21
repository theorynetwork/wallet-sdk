import { Wallet } from 'xrpl';

export interface StateXrplWalletModel {
  mnemonic: string | null;
  wallet: Wallet | null;
}
