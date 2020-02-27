const http = require('http');

const PORT = 80;

const handleRequest = (request, response) => {
    console.log('A user has visited my site!');
    response.end("It works! Hello world! We are hitting: " + request.url);
}

const server = http.createServer(handleRequest);

server.listen(PORT, () => {
    console.log('Server is listening on port: http://localhost:' + PORT);
});


const PORTONE = 5000;
const PORTTWO = 6000;

const handleRequestOne = (request, response) => {
    console.log('Be nice to them');
    response.end('You are a javascript master');
}

const handleRequestTwo = (request, response) => {
    console.log('Be mean to them');
    response.end('404 go away');
}

const serverOne = http.createServer(handleRequestOne);
const serverTwo = http.createServer(handleRequestTwo);

serverOne.listen(PORTONE, () => {
    console.log('Server is listening on port: http://localhost:' + PORTONE);
});

serverTwo.listen(PORTTWO, () => {
    console.log('Server is listening on port: http://localhost:' + PORTTWO);
});