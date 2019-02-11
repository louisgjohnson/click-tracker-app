# Click tracker app

## About

Tracks clicks for the user, the user is able to store their clicks to localstorage, reload and view their clicks

App is bootstrapped with [Create React App](https://github.com/facebook/create-react-app) for quick dev time & setup.

Decided to use localstore for saving & loading the data based on the simpleness of the data and the requirments.

## Goal
To create a simple click tracking app and for the user to able to save the click data in a small time frame

## Technology
- React
- Canvas for displaying the clicks
- Sass & css modules for styling
- localstorage for saving & loading the data
- Jest for testing

## Issues
- Currently the app isn't very responsive, the canvas doesn't resize with the browser
- Needs more testing on components
- Components aren't very reusable
- linting could be better (use airbnb?)
- add linting to precommit hook

## Running the app locally

install the dependencies
`yarn` or `npm install`

run the app
`yarn start` or `npm run start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## TODO
- Add more tests
- Add ability to clear local data
- Add ability to change click size
- Eject app for more configuration
- Add typescript

