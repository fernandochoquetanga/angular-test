# AngularDharbor

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.0.

## API Integration
Our App is using [The Movie Database website](https://www.themoviedb.org/documentation/api/discover)

`API_KEY` is `0971ed323ba8081b990144eef9e02ace`

In order to find popular movies using that API, please use following URL:

```
https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=0971ed323ba8081b990144eef9e02ace
```

Image Path is `https://image.tmdb.org/t/p/w160`.

Example: [https://image.tmdb.org/t/p/w160/9E2y5Q7WlCVNEhP5GiVTjhEhx1o.jpg](https://image.tmdb.org/t/p/w160/9E2y5Q7WlCVNEhP5GiVTjhEhx1o.jpg)

Get Movie details: `https://api.themoviedb.org/3/movie`

Example: GET [https://api.themoviedb.org/3/movie/211672?api_key=0971ed323ba8081b990144eef9e02ace](https://api.themoviedb.org/3/movie/211672?api_key=0971ed323ba8081b990144eef9e02ace)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
