import { LedgerIndex } from 'xrpl/dist/npm/models/common';

import { ActionsXrplAccount } from './account.actions.enum';

export class ActionXrplAccountBalancesGet { static readonly type = ActionsXrplAccount.BalancesGet; constructor(public address: string, public options?: { ledger_hash?: string, ledger_index?: LedgerIndex, peer?: string, limit?: number }) {} }
