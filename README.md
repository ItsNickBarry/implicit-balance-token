# Buidler + Web3 Project

This repository was generated from a template or is the template itself.  For more information, see [docs/TEMPLATE.md](./docs/TEMPLATE.md).

## Setup

Install dependencies via Yarn:

```bash
yarn install
```

## Networks

By default, Buidler uses the BuidlerEVM.

To use Ganache, append commands with `--network localhost`, after having started `ganache-cli` in a separate process:

```bash
yarn run ganache-cli
```

To use an external network via URL, set the `URL` environment variable and append commands with `--network generic`:

```bash
URL="https://mainnet.infura.io/v3/[INFURA_KEY]" yarn run buidler test --network generic
```

## Development and Testing

Compile contracts via Buidler:

```bash
yarn run buidler compile
```

Test contracts via Buidler:

```bash
yarn run buidler test
```

If using a supported network (such as Ganache), activate gas usage reporting by setting the `REPORT_GAS` environment variable to `true`:

```bash
REPORT_GAS=true yarn run buidler test --network localhost
```

Generate a code coverage report for Solidity contracts:

```bash
yarn run buidler coverage
```
