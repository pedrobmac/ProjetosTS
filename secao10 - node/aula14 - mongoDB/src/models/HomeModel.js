const mongoose = require('mongoose');

const HomeSchema = new mongoose.Schema({ //define as características do modelo para poder salvar no BD
    titulo: { type: String, required: true },
    descricao: String
});

const HomeModel = mongoose.model('Home', HomeSchema);

module.exports = HomeModel;