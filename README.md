# Implicit Balance Token

ERC20 token which allocates a non-zero initial balance to all addresses.  Based on the ERC20 implementation provided by OpenZeppelin version `3.0.1`.

This repository was generated from a template or is the template itself.  For more information, see [docs/TEMPLATE.md](./docs/TEMPLATE.md).

## Usage

Included are several `abstract` contracts containing basic implementation of an implicit-balance ERC20 token.  A fully implemented contract must call all base contract constructors, including that of `ERC20`.

| contract | constructor signature | description |
|-|-|-|
| `ImplicitFixedBalanceToken` | <code>uint&nbsp;base</code> | each account is allocated an implicit balance equal to `base` |
| `ImplicitRandomBalanceToken` | <code>uint&nbsp;min, uint&nbsp;mod, uint&nbsp;mul</code> |  each account is allocated an implicit balance between `min * mul` and `(min + mod) * mul`, determined by the `uint` representation of its `address` |

## Development

Install dependencies via Yarn:

```bash
yarn install
```

Compile contracts via Buidler:

```bash
yarn run buidler compile
```

### Networks

By default, Buidler uses the BuidlerEVM.

To use Ganache, append commands with `--network localhost`, after having started `ganache-cli` in a separate process:

```bash
yarn run ganache-cli
```

To use an external network via URL, set the `URL` environment variable and append commands with `--network generic`:

```bash
URL="https://mainnet.infura.io/v3/[INFURA_KEY]" yarn run buidler test --network generic
```

### Testing

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
