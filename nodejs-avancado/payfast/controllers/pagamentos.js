module.exports = function(app) {

    app.get('/pagamentos', (req, res) => {
        console.log('GET /teste recebido');
        res.send("OK");
    });

    app.post('/pagamentos/pagamento', (req, res) => {

        req.assert('forma_de_pagamento',
            "Forma de pagamento é obrigatório")
            .notEmpty();

        req.assert('valor',
            "Valor é obrigatório e deve ser um número decimal")
            .notEmpty().isFloat();

        var errors = req.validationErrors();

        if(errors){
            console.log("Erros de validação encontrados.");
            res.status(400).send(errors);
            return;
        }

        var pagamento = req.body;
        console.log("Processando uma requisição de um novo pagamento.");

        pagamento.status = 'CRIADO';
        pagamento.data = new Date();
        
        var connection = app.persistence.connectionFactory();
        var pagamentoDao = new app.persistence.PagamentoDao(connection);

        pagamentoDao.save(pagamento, (err, result) => {
            if(err){
                console.log('erro ao salvar pagamento', err);
                res.status(500).send(err);
                return;
            }
            console.log('pagamento criado');
            res.location('/pagamentos/pagamento/' + result.insertId);
            res.status(201).json(pagamento);
        });

    });

}