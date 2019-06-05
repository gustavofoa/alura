module.exports = (app) => {

    app.post('/correios/calculo-prazo', (req, res) => {
        var dadosDaEntrega = req.body;

        var corresiosSOAPClient = new app.services.correiosSOAPClient();

        corresiosSOAPClient.calculaPrazo(dadosDaEntrega, (errors, resultado) => {
            if(errors){
                res.status(500).send(erros);
                return;
            }
            console.log('prazoCalculado', resultado);
            res.json(resultado);
        });

    })

}