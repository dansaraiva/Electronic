class PessoaJuridica extends Pessoa {
  #cnpj;
  #razaoSocial;
  constructor(nome, endereco, cnpj, razaoSocial) {
    super(nome, endereco);
    this.cnpj = cnpj;
    this.razaoSocial = razaoSocial;
  }

  get cnpj() { return this.#cnpj; }
  set cnpj(valor) { this.#cnpj = validarTamanho(valor, 14, "CNPJ"); }

  get razaoSocial() { return this.#razaoSocial; }
  set razaoSocial(valor) {
    if (!valor || valor.trim() === "")
      throw new Error("Razão social é obrigatória");
    this.#razaoSocial = valor.trim();
  }

  toString() { return `${super.toString()} | CNPJ: ${this.cnpj}`; }
}