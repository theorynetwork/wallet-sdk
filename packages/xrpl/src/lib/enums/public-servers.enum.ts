/**
 * https://xrpl.org/public-servers.html
 */
export enum PublicServers {
  MainnetXRPLedgerFoundation = 'wss://xrplcluster.com/', // Full history server cluster

  /*
    Ripple's public servers are not for sustained or business use, and they may
    become unavailable at any time. For regular use, you should run your own
    rippled server or contract someone you trust to do so. Ripple includes
    Reporting Mode servers in its public clusters.
  */
  MainnetRipple1 = 'wss://s1.ripple.com/', // General purpose server cluster
  MainnetRipple2 = 'wss://s2.ripple.com/', // Full-history server cluster

  MainnetSologenic = 'wss://x1.sologenic.org', // Websocket Server,

  TestnetRipple = 'wss://s.altnet.rippletest.net/', // Testnet public server
  DevnetRipple = 'wss://s.devnet.rippletest.net/', // Devnet public server
}
