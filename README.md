# Test MeLi

This project includes a technical test for a job interview at MeLi

* Create the most viewed page of MeLi on React

## <a name="dependencies"></a>Dependencies used in this project

* [Frontend](https://github.com/JuanGidoni/TestMeLi/tree/master/client#test-meli-frontend)

```
    "@testing-library/jest-dom": "^5.11.4",
    "@testing-library/react": "^11.1.0",
    "@testing-library/user-event": "^12.1.10",
    "bootstrap": "^4.6.0",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-icons": "^4.2.0",
    "react-router-dom": "^5.2.0",
    "react-scripts": "4.0.3",
    "web-vitals": "^1.0.1"
```

* [Backend](https://github.com/JuanGidoni/TestMeLi/tree/master/server#test-meli-backend)

```
    "cors": "^2.8.5",
    "dotenv": "^8.2.0",
    "express": "^4.17.1",
    "node-fetch": "^2.6.1"
```

## <a name="installation-and-usage"></a>Installation and Usage

Prerequisites: [Node.js](https://nodejs.org/) (`^14..0.0`, or `=14.16.0`) built with SSL support. (If you are using an official Node.js distribution, SSL is always built in.)

Optional: [Docker Desktop](https://www.docker.com/products/docker-desktop) (`^20.10.0`). (Official Docker distribution)

### Install & Run locally

* [Frontend Readme](https://github.com/JuanGidoni/TestMeLi/tree/master/client#test-meli-frontend)
* [Backend Readme](https://github.com/JuanGidoni/TestMeLi/tree/master/server#test-meli-backend)

#### Using Docker (Optional):

ls-> TestMeLi folder and run this command: (or git bash here if you have git installed)

```
$ docker-compose up -d
```

Wait for docker to finish installing the project.

* Example finish line codes:

```
Creating testmeli_backend_1 ...
Creating testmeli_backend_1 ... done
Creating testmeli_frontend_1 ...
Creating testmeli_frontend_1 ... done
```

#### A simple test

* Added 3 test (Product, Filters & Loader). For test just run:

```
npm test
```

or

```
yarn test
```

### Browser access

* Backend API

Go to [localhost api default route](http://localhost:5000/v1/)

Go to [localhost api search example](http://localhost:5000/v1/search/notebooks)

Go to [localhost api filter example](http://localhost:5000/v1/filter/MLA1648)

* Frontend App

Go to [Localhost](http://localhost:3000)

##

### Project Version: 0.03
