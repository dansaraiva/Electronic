class Pessoa {
  #nome;
  endereco;

  constructor(nome, endereco) {
    this.nome = nome;           // passa pelo setter e valida
    this.endereco = endereco;
  }

  get nome() { return this.#nome; }

  set nome(valor) {
    if (typeof valor !== "string" || valor.trim().length < 3)
      throw new Error("Nome deve ter ao menos 3 caracteres");
    this.#nome = valor.trim();
  }

  toString() { return `${this.nome} | ${this.endereco}`; }
}