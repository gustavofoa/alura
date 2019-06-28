// var logger = require('../services/logger.js');

module.exports = function(app) {

    app.get('/pagamentos', (req, res) => {
        console.log('GET /teste recebido');
        res.send("OK");
    });

    app.get('/pagamentos/pagamento/:id', (req, res) => {
        var id = req.params.id;
        console.log('consulta pagamento', id);
        // logger.info('consulta pagamento', id);


        var memcachedClient = app.services.memcachedClient();
        memcachedClient.get('pagamento-'+id, (err, data) => {
            if(err || !data){
                console.log('MISS - chave não encontrada.');
                var connection = app.persistence.connectionFactory();
                var pagamentoDao = new app.persistence.PagamentoDao(connection);
                pagamentoDao.findById(id, (err, pagamento) => {
                    if(err){
                        console.log('erro ao consulta pagamento no banco.', err);
                        res.status(500).send(err);
                    } else {
                        console.log('pagamento encontrado', pagamento);
                        memcachedClient.set('pagamento-'+id, pagamento, 60000, (err) => {
                            console.log('nova chave adicionada no cache.');
                        });
                        res.json(pagamento);
                    }
                });
            } else {
                console.log('HIT - valor: ', data);
                res.json(data);
            }
        });

        
        
        

    })

    app.post('/pagamentos/pagamento', (req, res) => {

        req.assert('pagamento.forma_de_pagamento',
            "Forma de pagamento é obrigatório")
            .notEmpty();

        req.assert('pagamento.valor',
            "Valor é obrigatório e deve ser um número decimal")
            .notEmpty().isFloat();

        var errors = req.validationErrors();

        if(errors){
            console.log("Erros de validação encontrados.");
            res.status(400).send(errors);
            return;
        }

        var pagamento = req.body.pagamento;
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
            pagamento.id = result.insertId
            console.log('pagamento criado');

            var memcachedClient = app.services.memcachedClient();
            memcachedClient.set('pagamento-'+pagamento.id, pagamento, 60000, (err) => {
                console.log('nova chave adicionada no cache.');
            });

            if(pagamento.forma_de_pagamento === 'cartao'){
                var cartao = req.body.cartao;

                var clienteCartoes = new app.services.clienteCartoes();
                
                clienteCartoes.autoriza(cartao,
                    (exception, request, response, retorno) => {
                        if(exception){
                            console.log('exception', exception);
                            res.status(400).json(exception);
                            return;
                        }
                        console.log(retorno);

                        res.location('/pagamentos/pagamento/' + pagamento.id);

                        var response1 = {
                            dados_do_pagamento: pagamento,
                            cartao: retorno,
                            links: [{
                                href: 'http://localhost:3001/pagamentos/pagamento/' + pagamento.id,
                                rel: 'confirmar',
                                method: 'PUT'
                            },{
                                href: 'http://localhost:3001/pagamentos/pagamento/' + pagamento.id,
                                rel: 'cancelar',
                                method: 'DELETE'
                            }]
                        };

                        res.status(201).json(response1);
                    });

            } else {//Not credit card

                res.location('/pagamentos/pagamento/' + pagamento.id);

                var response = {
                    dados_do_pagamento: pagamento,
                    links: [{
                        href: 'http://localhost:3001/pagamentos/pagamento/' + pagamento.id,
                        rel: 'confirmar',
                        method: 'PUT'
                    },{
                        href: 'http://localhost:3001/pagamentos/pagamento/' + pagamento.id,
                        rel: 'cancelar',
                        method: 'DELETE'
                    }]
                };

                res.status(201).json(response);
            }
        });

    });

    app.put('/pagamentos/pagamento/:id', (req, res) => {

        var id = req.params['id'];

        var pagamento = {
            id: id,
            status: 'CONFIRMADO'
        };

        var connection = app.persistence.connectionFactory();
        var pagamentoDao = new app.persistence.PagamentoDao(connection);

        pagamentoDao.update(pagamento, (error) => {
            if(error){
                res.status(500).send(error);
                return;
            }
            console.log('Pagamento confirmado.');
            res.status(200).send(pagamento);
        });

    });

    app.delete('/pagamentos/pagamento/:id', (req, res) => {
        
        var id = req.params['id'];

        var pagamento = {
            id: id,
            status: 'CANCELADO'
        };

        var connection = app.persistence.connectionFactory();
        var pagamentoDao = new app.persistence.PagamentoDao(connection);

        pagamentoDao.update(pagamento, (error) => {
            if(error){
                res.status(500).send(error);
                return;
            }
            console.log('Pagamento cancelado.');
            res.status(204).send(pagamento);
        });

    });

}