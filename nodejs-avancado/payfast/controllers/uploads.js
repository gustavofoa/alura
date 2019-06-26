var fs = require('fs');

module.exports = (app) => {

    app.post('/upload/imagem', (req, res) =>{
        console.log('recebendo imagem.', req.headers.filename);

        req.pipe(fs.createWriteStream('files/'+req.headers.filename))
            .on('finish', () => {
                console.log('arquivo escrito');
                res.sendStatus(200);
            });

    })

}