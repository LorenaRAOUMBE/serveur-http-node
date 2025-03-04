// on importe createserver et http
const http = require('http')
const server = http.createServer((req,res) =>{
    res.setHeader('Content-Type','text/html');
    // definton des reponses selon les requetes du client
if (req.url === "/") {
    res.statusCode=200;
    res.end("<h1>Bienvenue sur mon serveur node.js</h1>");}
else if (req.url === "/about"){
    res.statusCode=200;
    res.end(" <h1>Voici la page à propos</h1>");}
else if (req.url === '/contact'){
    res.statusCode=200;
    res.end(" <h1>Contactez-nous à contact@monserver.com </h1>a");}
else if (req.url === '/autre'){
    res.statusCode=404;
    res.end(" <h1>404-Page non trouvée </h1>")
}

})
const PORT = 3400
server.listen(PORT,() =>{
    console.log('serveur en écoute sur le port 3400')
})