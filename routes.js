const fs = require('fs')

const requestHandler = ((req, res) => {
    // process.exit()
    const url = req.url;
    
    if( url === '/') {
        res.setHeader('Content-Type', 'text/html')
        res.write('<html>')
        res.write('<head><title>my Home Page</title></head>')
        res.write('<body><h1>Hello from Main Page</h1></body>')
        res.write('</html>')
        return res.end()
    }

    if( url === '/message') {
        fs.writeFileSync('message.txt', 'DUMMY');
        res.statusCode = 302;
        res.setHeader('Location', '/')
        return res.end()
    }
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<head><title>my First Page</title></head>')
    res.write('<body><h1>Hello from Node JS</h1></body>')
    res.write('</html>')
    res.end()
});

exports.handler = requestHandler
exports.someText = "some code text"