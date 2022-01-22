const fs = require('fs');
const http = require('http');
const { stringify } = require('querystring');
const url = require('url');

// const obj = fs.readFileSync('./words.json', 'utf-8');

// const objtext = JSON.parse(obj);
const data = fs.readFileSync(`./words.json`, 'utf-8');
const dataObj = JSON.parse(data);

const index = fs.readFileSync('./index.html', 'utf-8');

const server = http.createServer((req, res) => {
    if(req.url === '/Hangman-Game'){
        res.writeHead(200, {'Content-type':'text/html'});
        res.end(index);
    } else if(req.url === '/data'){
        res.writeHead(200, {'Content-type':'application/json'});
        res.end(data);
    }
})

server.listen(8000, '127.0.0.1', () =>{
    console.log('Listening...');
})