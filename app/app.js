const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res)=>{
    const url = req.url
    const method = req.method

    if(url === '/'){
        res.setHeader('Content-Type', 'text/html')
        res.write("<html>");
        res.write("<head><title>Node JS</title></head>");
        res.write("<body><form action='/message' method='POST'> <input type='text' name='fullName'/> <button type='submit'>Send</button></form></body>");
        res.write("</html>");
        return res.end()
    }
    if(url === '/message' && method === 'POST'){
        const body = []
        req.on('data', (chunk)=>{
            body.push(chunk)
        })
    
        req.on('end', ()=>{
            const parsedBody = Buffer.concat(body).toString().split('=')[1]
            fs.writeFileSync('file.txt', parsedBody)
        })
    }
    res.setHeader('Content-Type', 'text/html')
    res.write("<html>");
    res.write("<head><title>Node JS</title></head>");
    res.write("<body> Hello from Node JS Server</body>");
    res.write("</html>");
    res.end()
});

server.listen(3000)
