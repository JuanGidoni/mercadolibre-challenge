# Test MeLi

This project includes a technical test for a job interview at MeLi

* Create the most viewed page of MeLi on React

## <a name="installation-and-usage"></a>Installation and Usage

Prerequisites: [Node.js](https://nodejs.org/) (`^14..0.0`, or `=14.16.0`) built with SSL support. (If you are using an official Node.js distribution, SSL is always built in.)

### Using Docker:

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

### For testing use the next command:

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

### Install & Run locally

* [Frontend Readme](https://github.com/JuanGidoni/TestMeLi/tree/master/client#test-meli-frontend)
* [Backend Readme](https://github.com/JuanGidoni/TestMeLi/tree/master/server#test-meli-backend)

### Project Version: 0.02
