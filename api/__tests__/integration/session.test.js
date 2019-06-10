const usuario = require("../../src/models/usuario");

describe("Register", () => {
  it("User", async () => {
    const user = await usuario.create({
      nome: "marcos",
      email: "leandro@gmail.com",
      senha: "123456",
      dataNascimento: "24061997",
      telefone: "998166870"
    });
    console.log(user);
    expected(user.email).toBe("leandro@gmail.com");
  });
});
