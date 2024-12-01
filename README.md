# Sushiro HK Waiting Groups Map

This web application provides real-time updates on the number of waiting groups at different branches of Sushiro HK. This application calls the [backend API](https://github.com/tszyanalau/sushiro-hk-waiting-server), which fetches data from the API of the official Sushiro HK app, then displays the information on an interactive Google Map.

## Table of Contents

- [Sushiro HK Waiting Groups Map](#sushiro-hk-waiting-groups-map)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Technologies Used](#technologies-used)
  - [Environment Variables](#environment-variables)
  - [Testing](#testing)
    - [Lint Tests with ESLint](#lint-tests-with-eslint)
    - [Unit Tests with Jest](#unit-tests-with-jest)

## Features

- **Real-time updates**: The application fetches and displays the latest number of waiting groups from the API, keeping users informed of the current waiting status at each branch.
- **Tiered filtering**: The waiting groups are divided into different tiers based on the number of groups, allowing users to filter branches based on the waiting group size.
- **Display on Google Map**: The application presents the waiting group information on an interactive Google Map, providing users with a visual representation of branch locations and their respective waiting statuses.
- **Responsive design**: The web application is optimized for different screen sizes, providing a seamless experience across desktop and mobile devices.

## Installation

Follow the steps below to set up and run the application on your local machine:

1. Clone the repository:

```bash
git clone https://github.com/tszyanalau/sushiro-hk-waiting-client-ts.git
```

2. Change to the project directory:

```bash
cd sushiro-hk-waiting-client-ts
```

3. Install the dependencies:

```bash
npm install
```

## Usage

To run the application locally, use the following command:

```bash
npm start
```

The application will be available at [http://localhost:3000](http://localhost:3000).

## Technologies Used

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
- [React Router](https://reactrouter.com/) - A library for adding routing to React applications.
- [Redux](https://redux.js.org/) - A predictable state container for managing application state.
- [i18next](https://www.i18next.com/) - A internationalization (i18n) library for handling translations.
- [Bootstrap](https://getbootstrap.com/) - A popular CSS framework for responsive design.
- [Google Maps API](https://developers.google.com/maps/documentation/javascript) - A set of APIs provided by Google Maps for displaying maps and location-based information in web applications.

## Environment Variables

The following environment variables are needed for running the application:

- `REACT_APP_API_URL`: The base URL of the backend API to call backend API.
- `REACT_APP_API_KEY`: The API key for the backend API to call backend API. It is not needed for production environment since the production domain is whitelisted.
- `REACT_APP_GOOGLE_API_KEY`: The API key for Google Maps API to enable the integration of interactive maps.

## Testing

### Lint Tests with ESLint

Code quality and consistency are maintained by using ESLint to perform lint tests.

```bash
npm run lint
```

### Unit Tests with Jest

Comprehensive unit tests are set up for the React components in the project using Jest. The unit tests are located in the `src/components` directory and have filenames ending with `.test.tsx`.

To run the unit tests, use the following command:

```bash
npm test
```
