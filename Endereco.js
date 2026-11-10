class Endereco {
  constructor(logradouro, numero, cidade, uf) {
    this.logradouro = logradouro;
    this.numero = numero;
    this.cidade = cidade;
    this.uf = uf;
  }
  //console.log(validarTamanho("123.456.789-09", 11, "CPF"))

  toString() { return `${this.logradouro}, ${this.numero} - ${this.cidade}/${this.uf}`; }
}