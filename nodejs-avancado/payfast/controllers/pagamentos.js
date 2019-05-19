module.exports = function(app) {

    app.get('/pagamentos', (req, res) => {
        console.log('GET /teste recebido');
        res.send("OK");
    });

    app.post('/pagamentos/pagamento', (req, res) => {
        var pagamento = req.body;
        console.log("Processando uma requisição de um novo pagamento.");

        pagamento.status = 'CRIADO';
        pagamento.data = new Date();    

        res.send(pagamento);
    });

}