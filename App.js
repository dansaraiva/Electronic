const endereco = new Endereco("Rua das Flores", 120, "Fortaleza", "CE");
const clientes = [];

try {
  clientes.push(new PessoaFisica("Ana Souza", endereco, "123.456.789-09", "1990-05-10"));
  clientes.push(new PessoaJuridica("Loja Tech", endereco, "12.345.678/0001-95", "Loja Tech Ltda"));
  clientes.push(new PessoaFisica("Jo", endereco, "123", "2050-01-01"));   // inválido
} catch (erro) {
  console.error(`Erro: ${erro.message}`);
}

clientes.forEach((cliente) => console.log(String(cliente)));