var restify = require('restify-clients');

function CartoesClient(){
    this._cliente = restify.createJsonClient({
        url: 'http://localhost:3002'
    });
}

CartoesClient.prototype.autoriza = (cartao, callback) => {
    this._cliente = restify.createJsonClient({
        url: 'http://localhost:3002'
    });//Global var didn't work
    this._cliente.post('/cartoes/autoriza', cartao, callback);

}

module.exports = () => {
    return CartoesClient;
}