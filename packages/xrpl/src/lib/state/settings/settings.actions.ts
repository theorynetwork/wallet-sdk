import { ClientOptions } from 'xrpl';
import { PublicServers } from '../../enums';
import { ActionsXrplSettings } from './settings.actions.enum';

export class ActionXrplConnect { static readonly type = ActionsXrplSettings.Connect; constructor(public server: PublicServers | string, public options?: ClientOptions ) {} }
