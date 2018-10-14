![SPARQL Buddy](https://github.com/najjar-osama/semmtech-sparql-assignment/raw/master/sparql_buddy.png)

# SPARQL Buddy v.0.1

## Table of Contents

- [What is SPARQL Buddy?](#what-is-sparql-buddy)
- [Installing & Configuration](#)
- [Available Scripts](#)
- [App State ](#)
- [Naming Conventions ](#)
- [Icons](#)

### What is SPARQL Buddy?

[SPARQL Buddy](http://spqrqlb.herokuapp.com/) is a web application where you can create, execute, edit and share your SPARQL Queries with the others.

### Installing & Configuration

- Clone or download the repo to your machine.
- In the root folder of the project, create `.env` file.
- Add the following environment variable `REACT_APP_API_KEY` and set your API Key.
- Install dependencies by running `npm install` or 'yarn install`.

### Available Scripts

#### `npm run dev` or `yarn dev`

Runs the app in the development mode, to view open http://localhost:3000 in your favorite browser.
The page will reload when you make edits and you will also see any lint errors in the console.

#### `npm run test` or `yarn test`

Launches the test runner in the interactive watch mode.

#### `npm run build` or `yarn build`

Builds the app for production to the build folder & your app is ready to be deployed!

#### `npm start` or `yarn start`

Runs the app in the production mode. Open http://localhost:8080 to view it in the browser.
The app will be served from the `build` directory so make sure you have built your latest changes.

### App's State

![SPARQL Buddy](https://github.com/najjar-osama/semmtech-sparql-assignment/raw/master/state.png)

- As you can see in the image above, application's state consists of `queries : Array` which has all the retrieved queries from the database, `filters : Object` with 3 properties represent the available filtering options `name, description, creator` and `requestStatus : Object` with 3 properties `status, message, error` represent the status of the latest API/Async call.

- After the app has been mounted, and since there is no authentication required `state.queries` will be populated with the retrieved queries from DB, and `state.requestStatus` will be populated with the status of this retrieve/get request. When the user starts to apply some filters `state.filters` will be populated with theses filters value.
  Creating/updating queries will also cause to populate `state.queries` & `state.requestStatus` to be populated with new values respectively.

- Example State at certain point :

```js
{
  queries: [
    {
      id: 'get-2-americana',
      name: 'Get  2 Americanaaa!',
      description: 'Donec enim diam vulputate ut pharetra sit amet aliquam id.',
      creator: 'John Doe',
      query: '### some query'
    },
    {
      id: 'get-3-americana',
      name: 'Get  3 Americanaaa!',
      description: 'Donec enim diam vulputate ut pharetra sit amet aliquam id.',
      creator: 'Jeny Doe',
      query: '### some query'
    }
  ],
  filters: {
    name: '',
    description: '',
    creator: ''
  },
  requestStatus: {
    status: 'SUCCESS',
    message: 'Retrieved 2 Queries Successfully.',
    error: null
  }
}
```

### Naming Conventions

- SASS/SCSS is used for styling the app, mainly for the sake of writing modular css, and the followed naming convention for css classes is [BEM](http://getbem.com/)( Block Element Modifier ).

### Icons

- App's Icon/logo made by [mynamepong](https://www.flaticon.com/authors/mynamepong) and downloaded from [Falticon](https://www.flaticon.com)

### Other

- This project template was built with Create React App, which provides a simple way to start React projects with no build configuration needed.
