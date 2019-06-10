const request = require("supertest");
const app = require("../../src/app");
const usuario = require("../../src/models/usuario");

describe("Register", () => {
  it("User", async () => {
    const user = await usuario.create({
      nome: "marcos",
      email: "leandrobarboza2@gmail.com",
      senha: "12345678",
      dataNascimento: "24061997",
      telefone: "998166870"
    });
    const response = await request(app)
      .post("/cadastrar")
      .send({
        nome: user.nome,
        email: user.email,
        senha: user.senha,
        dataNascimento: user.dataNascimento,
        telefone: user.telefone
      });
    expect(response.status).toBe(200);
  });
});
