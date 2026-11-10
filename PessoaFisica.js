class PessoaFisica extends Pessoa {
  #cpf;
  #dataNascimento;
  constructor(nome, endereco, cpf, dataNascimento) {
    super(nome, endereco);       // reaproveita a classe base
    this.cpf = cpf;
    this.dataNascimento = dataNascimento;
  }

  get cpf() { return this.#cpf; }
  set cpf(valor) { this.#cpf = validarTamanho(valor, 11, "CPF"); }
  get dataNascimento() { return this.#dataNascimento; }
  set dataNascimento(valor) {
    const data = new Date(valor);
    if (Number.isNaN(data.getTime()) || data > new Date())
      throw new Error("Data de nascimento inválida");
    this.#dataNascimento = data;
  }

  toString() { return `${super.toString()} | CPF: ${this.cpf}`; }
}