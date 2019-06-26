var fs = require('fs');

fs.createReadStream('imagem.jpg')
    .pipe(fs.createWriteStream('imagem2.jpg'))
    .on('finish', () => {
        console.log('arquivo escrito com stream');
    });