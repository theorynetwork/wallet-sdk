import { MnemonicLanguage, MnemonicType } from '../../enums';
import { ActionsXrplWallet } from './wallet.actions.enum';

export class ActionXrplWalletMnemonicGenerate { static readonly type = ActionsXrplWallet.MnemonicGenerate; constructor(public type: MnemonicType, public language: MnemonicLanguage = MnemonicLanguage.English) {} }
export class ActionXrplWalletCreate { static readonly type = ActionsXrplWallet.WalletCreate; constructor(public mnemonic?: string | null) {} }
