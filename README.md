<h1>portfolio.db</h1>

<p>A showcase of my journey in web development. Explore a selection of my latest web applications, crafted with the latest technologies. 
Note: as of July 2023 my personal portfolio web app has been updated to v2. Redesigned and re-engineered UI components with React. </p>

<h3>Table of Contents</h3>

```sh
1. About
2. Projects
3. Contact 
4. Resume
```

<h3>Technologies</h3>

```sh
React.js 
CSS
MapboxGL API
Netlify
```
### [Live Preview](https://portfolio-dbae.netlify.app/) - https://portfolio-dbae.netlify.app

### [Repository](https://github.com/danveb/portfolio.db)

<h1>Setup</h1>

Clone repo

```sh
$ git clone git@github.com:danveb/portfolio.db.git
```

Head to client on project directory where package.json/yarn.lock are located

```sh
$ cd/portfolio.db/client
```

Install required dependencies 

```sh
$ yarn install
```

Start the server 

```sh
$ yarn start
```

MapboxGL API 

```js
// out-of-the-box Contact page will not work because API access token is required to use MapboxGL

// head to Mapbox API how to register for an API_KEY

// include a .env file to store API SECRETS from the get-go
REACT_APP_MAPBOX_API = SECRET
```

<h3>Test</h3>

Tested components via RTL (React Testing Library) 

```sh
$ yarn test --watchAll
OR
$ yarn test NAME_OF_COMPONENT.test.js

Note: test may throw an error with the following line of code from Contact.jsx: 

"import mapboxgl from "!mapbox-gl" // eslint-disable-line import/no-webpack-loader-syntax"
```

<h1>Gallery</h1>

<h3>Landing Page</h3>
<img src="src/../client/src/assets/gallery/portfolio_blank.png">

### Figma (Prototype v1)
<img src="./client/src/assets/prototype/Frame%201.png" alt="Figma design prototype">