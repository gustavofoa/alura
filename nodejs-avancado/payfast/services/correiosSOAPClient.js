var soap = require('soap');

function CorreiosSOAPClient(){

}

CorreiosSOAPClient.prototype.calculaPrazo = (dadosDaEntrega, callback) => {

    soap.createClient('http://ws.correios.com.br/calculador/CalcPrecoPrazo.asmx?wsdl',
        (error, client) => { client.CalcPrazo(dadosDaEntrega, callback); }
    );

}

module.exports = () =>{
    return CorreiosSOAPClient;
}