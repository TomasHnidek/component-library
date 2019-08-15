# TomasHnidek/component-library

Based on [react-modern-library-boilerplate](https://github.com/transitive-bullshit/react-modern-library-boilerplate) 

## Intro

Changes from boilerplate: 
 - Updated packages
 - Added support for SCSS
 - Added storybook

## Installation

```
npm install
```
and 
```
npm run storybook
```

## Before commit

``` 
npm run build
```
This needs to be run in order to have /dist files generated for the way we use the library in our solutions

## Usage in projects

In package.json, in dependencies include

```json
"library": "git+https://github.com/TomasHnidek/component-library.git#master",
```

and then just import component, e.g.

```js
import { Button } from 'library';
```