import { Client, ClientOptions, ConnectionError, ValidationError, XrplError } from 'xrpl';

import { PublicServers } from '../../enums';

export interface StateXrplSettingsModel {
  server: PublicServers | string | null;
  client: Client | null;
  clientOptions: ClientOptions | null;
  connectError: ValidationError | ConnectionError | XrplError | null
}
