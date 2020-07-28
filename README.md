# Police Digital Services Frontend Library

Reusable front-end components and styles to build digital policing products and services.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

To run the pattern library you will need:

- [Node.js](https://nodejs.org/en/)

### Installing

To install the pattern library, first clone the repo. Then install the dependencies using Yarn.

```shell
$ git clone https://github.com/policedigitalservices/pds-frontend.git
$ cd pds-frontend
$ npm install
```

You can now run a local copy by running:

```shell
$ npm run start
```

## Running the tests

### Linting

Use [ESLint](https://eslint.org/) and [Stylelint](https://stylelint.io/) to lint the code base.

```shell
$ npm run lint
```

## Deployment

To build the Pattern Library, run:

```shell
$ npm ci
$ npm run build
```