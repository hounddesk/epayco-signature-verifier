# epayco-signature-verifier
ePayco Signature verifier used for transactions integrity checks

- Follow up specific documentation here (in spanish only) (https://docs.epayco.co/payments/checkout)[https://docs.epayco.co/payments/checkout]

## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/).

Before installing, [download and install Node.js](https://nodejs.org/en/download/).
Node.js 0.10 or higher is required.

Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```bash
$ npm i @hounddesk/epayco-signature-verifier
```

## Use the library

```js
const { verify } = require('@hounddesk/epayco-signature-verifier');
const transactionIsLegit = verify({signature, transaction, separator}) 
```

## Development

If you to contribute or run the project as standalone library

```bash
$ git clone git@github.com:hounddesk/epayco-signature-verifier.git --depth 1
$ cd epayco-signature-verifier
$ npm install
```

Then run the library in development mode:

```bash
$ npm run start:dev 
```

This library is build with TypeScript, you need to build the source first:

```bash
$ npm run build
```

## Tests

  To run the test suite, first install the dependencies, then run `npm test`:

```bash
$ npm i
$ npm test
```
