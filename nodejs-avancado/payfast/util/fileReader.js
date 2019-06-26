var fs = require('fs');

fs.readFile('imagem.jpg', (err, buffer) => {
    console.log('Arquivo lido.');

    fs.writeFile('imagem2.jpg', buffer, () => {
        console.log('arquivo escrito.');
    });
});