const usuario = require("../models/usuario");
const bcrypt = require("bcrypt");

exports.login = (req, res) => {
  usuario
    .findOne({ email: req.body.email })
    .then(cadastro => {
      bcrypt.compare(req.body.senha, cadastro.senha, (err, result) => {
        if (!result) {
          return res.status(401).json({
            data: cadastro,
            message: "Usuario ou senha inválidos.",
            code: 401
          });
        } else if (cadastro.status == "ativo") {
          return res.status(200).json({
            data: cadastro,
            message: "Login efetuado com sucesso",
            code: 200
          });
        } else {
          return res.status(401).json({
            data: cadastro,
            message: "Usuario ou senha inválidos.",
            code: 401
          });
        }
      });
    })
    .catch(err => {
      return res.status(500).json({
        message: "Falha ao realizar o login",
        error: err
      });
    });
};
exports.novoUsuario = (req, res) => {
  let senhaCript = bcrypt.hashSync(req.body.senha, 14);
  let novoUsuario = new usuario({
    nome: req.body.nome,
    email: req.body.email,
    senha: senhaCript,
    dataNascimento: req.body.dataNascimento,
    telefone: req.body.telefone
  });
  novoUsuario
    .save()
    .then(data => {
      res.status(200).json({
        code: 200,
        message: "Usuário criado",
        data,
        type: "POST"
      });
    })
    .catch(err => {
      res.status(500).json({
        code: 500,
        message: "Erro ao criar usuário",
        err
      });
    });
};

exports.deletaUsuario = (req, res) => {
  usuario
    .updateOne(
      { email: req.body.email },
      {
        $set: {
          status: "excluido"
        }
      }
    )
    .then(() => {
      return res.status(200).json({
        message: "Usuário excluido",
        code: 200
      });
    })
    .catch(err => {
      return res.status(500).json({
        message: "Falha para apagar o cadastro informado",
        code: 500,
        err
      });
    });
};

exports.buscaUsuario = (req, res) => {
  usuario
    .findById({ _id: req.params.id })
    .then(data => {
      res.status(200).json({
        message: "Usuário encontrado",
        data,
        type: "GET",
        url: process.env.BASEURL + "/buscaUsuario/" + req.params.id
      });
    })
    .catch(err => {
      res.status(500).json({
        message: "Usuário não encontrado",
        err
      });
    });
};

exports.alteraUsuario = (req, res) => {
  usuario
    .update(
      { email: req.body.email },
      {
        $set: {
          nome: req.body.nome,
          email: req.body.email,
          dataNascimento: req.body.dataNascimento,
          telefone: req.body.telefone
        }
      }
    )
    .then(data => {
      res.status(200).json({
        message: "Alteração concluida",
        code: 200,
        data,
        type: "PATCH",
        url: process.env.BASEURL + "/alteraUsuario/" + req.params.id
      });
    })
    .catch(err => {
      res.status(500).json({
        code: 500,
        message: "Erro em alterar cadastro",
        err
      });
    });
};
