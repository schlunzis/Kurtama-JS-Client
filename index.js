require('dotenv').config()
const net = require('net');

const client = net.createConnection({ port: process.env.SERVER_PORT }, () => {
    console.log('Connected to server!');
});

client.on('data', (data) => {
    console.log(data.toString());
});

client.on('end', () => {
    console.log('Disconnected from server');
});

let loginRequest = {
    discriminator: 'LoginRequest',
    email: process.env.USER_EMAIL,
    password: process.env.USER_PASSWORD
};

// To send a message to the server
client.write(JSON.stringify(loginRequest));