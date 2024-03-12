class Pessoa {
  private _nome: string;
  private _idade: number;
  private _email: string;

  constructor(nome: string, idade: number, email: string) {
    this.validarNome(nome);
    this._nome = nome;
    this._idade = idade;
    this._email = email;
  }

  private validarNome(nome: string): void {
    if (/\d/.test(nome)) {
      throw new Error(
        `Erro: O nome ${nome} contem caracteres numéricos, substitua o número por letra!`
      );
    }
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

  set nome(novoNome: string) {
    this._nome = novoNome;
  }

  set idade(novaIdade: number) {
    this._idade = novaIdade;
  }

  set email(novoEmail: string) {
    this._email = novoEmail;
  }

  imprimirDados(): string {
    return `Nome: ${this._nome}, Idade: ${this._idade}, Email: ${this._email}`;
  }
}

class BancoDeDados {
  private static listaDePessoas: Array<Pessoa> = [];

  static adicionarAoBanco(pessoa: Pessoa): void {
    this.listaDePessoas.push(pessoa);
    console.log(`Pessoa ${pessoa.nome} adicionada com sucesso.`);
  }

  static listar(): void {
    console.log("Lista de Pessoas:");
    this.listaDePessoas.forEach((pessoa) =>
      console.log(pessoa.imprimirDados())
    );
  }

  static 
}

class Menu {
  constructor() {
  }

  static adicionarMenu(pessoa: Pessoa): void {
    BancoDeDados.adicionarAoBanco(pessoa);
  }

  static alterarNome(pessoa: Pessoa, novoNome: string): void {
    pessoa.nome = novoNome;
    console.log(`Nome da pessoa alterado para: ${pessoa.nome}`);
  }

  static alterarIdade(pessoa: Pessoa, novaIdade: number): void {
    pessoa.idade = novaIdade;
    console.log(`Idade da pessoa alterado para: ${pessoa.idade}`);
  }

  static alterarEmail(pessoa: Pessoa, novoEmail: string): void {
    pessoa.email = novoEmail;
    console.log(`Email da pessoa alterado para: ${pessoa.email}`);
  }

  static listarMenu() {
    BancoDeDados.listar();
  }

  static deletarMenu() {

  }

  static buscarPeloNome() {

  }

}

const pessoa1 = new Pessoa("Raimundo", 55, "raimundo@gmail.com");
const pessoa2 = new Pessoa("Lucas", 24, "lucas@gmail.com");
const pessoa3 = new Pessoa("Bianca", 18, "bianca@gmail.com");
const pessoa4 = new Pessoa("Júlia", 13, "julia@gmail.com");
const pessoa5 = new Pessoa("João", 35, "joao@gmail.com");

console.log(pessoa1.nome); // Uso do GET

Menu.adicionarMenu(pessoa1);
Menu.adicionarMenu(pessoa2);
Menu.adicionarMenu(pessoa3);
Menu.adicionarMenu(pessoa4);
Menu.adicionarMenu(pessoa5);

Menu.alterarNome(pessoa1, "Marcelo");
Menu.alterarIdade(pessoa2, 100);
Menu.alterarEmail(pessoa3, "email@alterado.com");

// BancoDeDados.listar();

Menu.listarMenu()
