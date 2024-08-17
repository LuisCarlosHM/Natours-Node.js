
# Natours

Natours is a full-featured tour booking application, developed as part of the _"Node.js, Express, MongoDB & More: The Complete Bootcamp"_ course by Jonas Schmedtmann. This project demonstrates modern web development practices using Node.js, Express, and MongoDB.





## Getting Started

Before running the application, ensure you have the following installed:

1) **Node.js**: JavaScript runtime environment.
2) **npm**: Node Package Manager, typically installed with Node.js.
3) **MongoDB**: For database storage, either locally or via a cloud service like MongoDB Atlas.


## Environment Variables

To run this project, create the file config.env on your root folder, you will need to add the following environment variables to your file:

`NODE_ENV = development/production`

**Database configuration**

`PORT =  The port on which your application will run.`

`PASSWORD = DB password, will replace <PASSWORD> on DATABASE env variable`

`DATABASE = 
MongoDB connection string.`

#### Example DATABASE env variable

\<PASSWORD>: This placeholder will be replaced by the PASSWORD environment variable in your configuration.

```bash
  mongodb+srv://exampleUser:<PASSWORD>@mycluster.xxxx.mongodb.net/myDatabase?retryWrites=true&w=majority&appName=myApp
```


**JWT**

`JWT_SECRET = Secret key used for signing JWT tokens`

`JWT_EXPIRES_IN = Token expiration time`

 **Email Server**
 
`EMAIL_USERNAME = Email username for the SMTP server`

`EMAIL_PASSWORD = Email password for the SMTP server`

`EMAIL_HOST = SMTP server host`

`EMAIL_PORT = SMTP server port`



## Run Locally

Clone the project

```bash
  git clone https://github.com/LuisCarlosHM/Natours-Node.js.git
```

Go to the project directory

```bash
  cd Natours-Node.js
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```




