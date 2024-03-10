class Pessoa {
  private _nome: string; // NÃO PODE RECEBER NENHUM VALOR NUMÉRICO!
  private _idade: number;
  private _email: string;

  constructor(nome: string, idade: number, email: string) {
    this._nome = nome;
    this._idade = idade;
    this._email = email;
  }

  validarNome(nome: string) {
    //  if (conterAlgumNumero) {
    //     throw new Error("Erro: O nome não pode conter caracteres numéricos.")
    //  }
    return nome;
  }

  get nome(): string {
    return this._nome;
  }

  get idade(): number {
    return this._idade;
  }

  get email(): string {
    return this._email;
  }

  imprimirDados(): string {
    return `Nome: ${this._nome}, Idade: ${this._idade}, Email: ${this._email}`;
  }

  adicionar() {}

  listar() {}

  buscarPeloNome() {}

  atualizar() {}

  deletar() {}
}

class BancoDeDados {
  private listaDePessoas: Array<Pessoa> = [];

  constructor() {}

  adicionarAoBanco(pessoa: Pessoa): void {
     this.listaDePessoas.push(pessoa);
     console.log(`Pessoa ${pessoa.nome} adicionada com sucesso.`);
  }

  listar() {
    console.log("Lista de Pessoas:");
    this.listaDePessoas.forEach((pessoa) => console.log(pessoa));
  }

  buscarPeloNome() {}

  atualizar() {}

  deletar() {}
}

class Menu {
  private _bancoDeDados: BancoDeDados;

  constructor(bancoDeDados: BancoDeDados) {
    this._bancoDeDados = bancoDeDados;
  }

  adicionarMenu(pessoa: Pessoa) {
    this._bancoDeDados.adicionarAoBanco(pessoa);
  }

  listar() {}

  buscarPeloNome() {}

  atualizar() {}

  deletar() {}
}

const bancoDeDados = new BancoDeDados();
const menu = new Menu(bancoDeDados);

console.log(bancoDeDados);

const pessoa1 = new Pessoa("Raimundo1", 55, "raimundo@gmail.com");
const pessoa2 = new Pessoa("Lucas", 24, "lucas@gmail.com");
const pessoa3 = new Pessoa("Bianca", 18, "bianca@gmail.com");
const pessoa4 = new Pessoa("Júlia", 13, "julia@gmail.com");
const pessoa5 = new Pessoa("João", 35, "joao@gmail.com");

menu.adicionarMenu(pessoa1);
menu.adicionarMenu(pessoa2);
menu.adicionarMenu(pessoa3);
menu.adicionarMenu(pessoa4);
menu.adicionarMenu(pessoa5);

console.log(bancoDeDados);