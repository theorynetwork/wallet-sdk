import { ActionsXrplWallet } from './wallet.actions.enum';

export class ActionXrplWalletMnemonicGenerate { static readonly type = ActionsXrplWallet.MnemonicGenerate; }
export class ActionXrplWalletCreate { static readonly type = ActionsXrplWallet.WalletCreate; constructor(public mnemonic?: string | null) {} }
