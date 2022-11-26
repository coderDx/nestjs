<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest


## Description

A sample API by @coderDx featuring the [Nest](https://github.com/nestjs/nest) framework TypeScript starter repository. Based on [this video](https://youtu.be/F_oOtaxb0L8).

## Installation

```bash
$ yarn
```

## Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## Test

```bash
# unit tests
$ yarn test

# e2e tests
$ yarn test:e2e

# test coverage
$ yarn test:cov
```

## Using
This API features all CRUD operations for a sample 'Products' table. No actual database is being used for this demo. Data is actually stored in a `products` array in memory, and will be lost on every reload.

A Product has the following model:
```TS
{
    public id: string,
    public title: string,
    public description: string,
    public price: number,
}
```
Running `yarn start:dev` will start a local server on your machine, available at `localhost:3000`. You can make `GET`, `POST`, `PATCH`, and `DELETE` calls to this endpoint using Postman.


