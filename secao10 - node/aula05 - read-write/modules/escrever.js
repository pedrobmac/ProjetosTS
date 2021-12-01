const fs = require('fs').promises;

module.exports = (caminho, dados) => {
    fs.writeFile(caminho, dados, {
        flag: 'w', //w - sobrescrever, a - incluir no final
        encoding: 'utf8' //padrão
    });
}
