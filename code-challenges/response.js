const http = require('http'); 

const server = http.createServer(function (req, res) {
    console.log(req);

    res.end("This is the Response from the Server !!")
});


const PORT = 3000;
server.listen(PORT, ()=>{
    console.log(`Server running on Port address : http://localHost:${PORT}`)
});