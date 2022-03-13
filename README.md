# UNEP-WCMC Tech Test

This project is a React SPA and has been configured with four routes:

- A list of photo albums (`/` route, aka gallery)
- A list of photos inside each album (`/album/:albumId` route)
- Individual photos (`/album/:albumId/photo/:photoId` route)
- Not found / 404

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`

Installs the dependencies needed by this project.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Choices Made

1. Fetch data at the top most level and use React Context to make fetched data available to all components and avoid making multiple requests
2. Use CSS modules to avoid clashing global class names

## What I'd do if I had more time

1. Add back button to header on album and photo routes
2. Refactor Gallery and Album to use a resusable Grid component
3. Handle edge cases (e.g. albums with no photos) and improve test coverage
