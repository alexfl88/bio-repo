const http = require('http');

const PORT = 8080;

const displayRoot = res => {
    const myHtml = `<html>
    <body>
    <h1>Home page<h1>
    <a href='/portfolio'>Portfolio</a>
    <body>
    </html>`;
    res.writeHead(200,{"Content-Type": "text/html"});
    res.end(myHtml);
};

const displayPortfolio = res => {
    
};

const display404 = '';

const handleRequest = (req, res) => {
    const path = req.url;

    switch(path) {
        case "/":
            return displayRoot(res);
        case "/portfolio":
            return displayPortfolio(res);
        default:
            return display404(res);
    }
}