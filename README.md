# MaterialSample

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.3.

## Application Step Configuration
Scaffolding angualr project

```sh
ng new poc-training-angular
```

Install keycloak dependency
```sh
npm install keycloak-angular keycloak-js --save
```

The last version of **keycloak-angular** install the **keycloak-js** version ^16.1.1, but this version is ot compatible with 18.0.0 so we must change from package the version of ^18.0.0 compatible with logout endpoint

For more detail read the official documentation
[Keycloak 18.0.0 released](https://www.keycloak.org/2022/04/keycloak-1800-released)

Install angular material dependency

```sh
ng add @angular/material
```

Generate an angular module

```sh
ng generate module views/product
```

Generate an angular componente inside a module

```sh
ng generate component views/product --module product.module
```

## IAM service

Start IAM Keycloak service

```sh
docker run -p 8080:8080 -e KEYCLOAK_ADMIN=admin -e KEYCLOAK_ADMIN_PASSWORD=admin quay.io/keycloak/keycloak:18.0.0 start-dev
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.