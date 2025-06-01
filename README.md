# App

[![codecov](https://codecov.io/github/Michael-Perillo/AngularFrontendPOC/graph/badge.svg?token=TLNM11X205)](https://codecov.io/github/Michael-Perillo/AngularFrontendPOC)
[![Build Status](https://img.shields.io/github/workflow/status/Michael-Perillo/AngularFrontendPOC/CI?label=CI&logo=github&style=flat)](https://github.com/your-username/AngularFrontendPOC/actions)

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.0.0.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Testing

Run the following command to execute the unit tests:

```bash
npm test
```

To run tests with code coverage:

```bash
npm run test:coverage
```

The code coverage reports can be found in the `coverage/app` directory after running the tests.

## CI/CD Pipeline

This project uses GitHub Actions for continuous integration and deployment. The workflow includes:

- Code formatting check
- Linting
- Building the application
- Running tests with coverage gates (minimum 80% coverage required)
- Deploying to GitHub Pages

You can view the build history and status in the [Actions tab](https://github.com/your-username/AngularFrontendPOC/actions).

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
