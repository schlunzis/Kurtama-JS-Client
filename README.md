# Kurtama JS Client

This repo contains a simple example on how to connect to the Kurtama backend using javascript in Nodejs. Make sure to have nodejs installed. 

Currently implemented is a connection esteblishment with the server followed by a login request that is answered by the server.

Tested with nodejs version 18.13.0

## Usage

In order to use this example client, you need to clone this repo and init the node project:
```bash
npm install
```
Now it's time to set up you variables in the `.env` file. For that you might just copy the `.env-sample` file and fill in the values respectivly.
After that, start the Kurtama Server. Now you can start the node project with:
```bash
node index.js
```

This will connect to the server and login the user