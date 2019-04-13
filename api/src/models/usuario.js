const { Schema, model } = require('mongoose');

const usuarioSchema = new Schema ({
    nome: {
        type: String,
        required: true,
        min: 3,
        match: /^[a-zA-ZãáàâÃÁÀÂéèêÉÈÊçÇ\s]{3,}$/
    },
    email: {
        type: String,
        default: null,
        match: /^(?:\w)+(?:\w|-|.)*@(?:\w)+(?:\w|-)*\.(?:\w)+(?:\w|-)*(\.\w+)?$/
    },
    senha: {
        type: String,
        default: null,
        min: 8
    },
    dataNascimento: {
        type: String,
        required: true,
        validator: function (valor) {
            return /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/.test(valor)
        }
    },  
    telefone: {
        type: String,
        required: true,
        validator: function (valor) {
            return /^\([0-9]{2}\) [0-9]{5}\-[0-9]{4}$/.test(valor)
        }
    },
    status: {
        type: String,
        default: 'ativo'
    }
});

module.exports = model('usuario', usuarioSchema)
