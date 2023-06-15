const express = require("express");
const router = express.Router();
const Administrador = require("../models/Administrador");
const bcrypt = require("bcryptjs");
const { and } = require("sequelize");


router.post("/usuario/salvar", async (req, res) => {
  const { email, senha } = req.body;
  
  try {
    // Procurar um administrador com o email fornecido
    const administrador = await Administrador.findOne({ where: { email } });

    if (administrador) {
      // Comparar a senha fornecida com a senha armazenada usando bcrypt
      const match = await bcrypt.compare(senha, administrador.senha);

      if (match) {
        // Senha correta, redirecionar para a página index
        req.session.administrador = {
          id: administrador.id,
          email: administrador.email
      }
        res.render('index');
      } else {
        // Senha incorreta
        res.send('Senha incorreta.');
      }
    } else {
      // Administrador não encontrado
      res.send('Usuário não cadastrado.');
    }
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    res.send('Ocorreu um erro ao fazer login.');
  }
  });

module.exports = router;