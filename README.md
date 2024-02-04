## portfolio.db

A showcase of my journey in web development. Explore a selection of my latest web applications, crafted with the latest technologies.

*Note: as of August 2023 my portfolio is updated with React TypeScript. A major UI redesign is now live.*

### Table of Contents

```
1. About
2. Projects
3. Contact 
4. Resume
```

### Technologies

```
React.js 
TypeScript
CSS
EmailJS 
Vercel
```

### [Live Demo](https://dbae.vercel.app/) 

### [GitHub Repository](https://github.com/danveb/portfolio.db)

## Setup

Clone from repository 

```sh
git clone git@github.com:danveb/portfolio.db.git
```

Head to client on project directory where package.json/yarn.lock are located

```sh
cd portfolio.db/client
```

Install required dependencies 

```sh
yarn install
```

Start the server 

```sh
yarn start
```

#### EmailJS
EmailJS is a client-side email sending library that does not require any server-side code. It is integrated to the Contact page, where users can send me messages directly from the client. 

https://www.emailjs.com/docs/

Make sure to set up your account at EmailJS to get your own private set of keys. Then add them as environment variables. 

```
REACT_APP_SERVICE_ID=SECRET
REACT_APP_TEMPLATE_ID=SECRET
REACT_APP_PUBLIC_KEY=SECRET
```

### Test

Perform unit testing of all components/pages with RTL (React Testing Library) and Jest matchers. 

```sh
yarn test --watchAll
```

or 

```sh
yarn test name_of_component.test.tsx
``` 

## Gallery 

![Landing Page](src/../client/src/assets/gallery/portfolio_blank.png)

![Figma design prototype](./client/src/assets/prototype/Frame%201.png)