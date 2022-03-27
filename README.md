# Wallet SDK

The Wallet SDK provides the following features to be used in Hybrid
Mobile App development:

- Front end state management abstractions ([NGXS](https://www.ngxs.io/)/[NgRx](https://ngrx.io/)) to common crypto wallet functions.
- Common wallet UI components built on the [Ionic Framework](https://ionicframework.com/) which provide the crypto community development tools using modern JavaScript frameworks such as [Angular](https://angular.io/), [React](https://reactjs.org/), [Vue.js](https://vuejs.org/), and [Stencil](https://stenciljs.com/).
- Start with the [XRP Ledger](https://xrpl.org/) but expand to other popular crypto networks.

## Roadmap

We are in the beginning stages of development but here is our current roadmap:

1. Work on a bridge between [Node.js](https://nodejs.org/en/) and the [Capacitor Framework](https://capacitorjs.com/) by building a new community plugin.
2. Publish the open source [plugin](https://github.com/theorynetwork/capacitor-nodejs) to npm which will be installable via
   - `npm i @theory/capacitor-nodejs`
3. Add front end state management abstractions for common [xrpl.js](https://js.xrpl.org/) wallet functions.
   - `npm i @theory/wallet-sdk`
4. Add common UI wallet components using the Ionic framework in Angular for the XRP Ledger.
   - `npm i @theory/wallet-ui`
5. Expand the components to include other front end JavaScript frameworks.
6. Add more crypto networks such as [Algorand](https://www.algorand.com/), [Ethereum](https://ethereum.org), [Stellar](https://www.stellar.org), [Bitcoin](https://bitcoin.org/), etc...
