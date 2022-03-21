import { Balance } from '../../interfaces';

export interface StateXrplAccountModel {
  address: string | null;
  balances: Array<Balance>;
  error: any | null;
}
