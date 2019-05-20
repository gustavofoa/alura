var app = require('./config/custom-express')();

app.listen(3002, () => {
    console.log('Servidor de cartões rodando na porta 3002');
});
