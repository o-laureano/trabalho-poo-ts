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
        `Erro: O nome ${nome} contém caracteres numéricos. Substitua o número por letra!`
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
    const pessoaExistente = this.listaDePessoas.find(p => p.nome === pessoa.nome);
    if (pessoaExistente) {
      console.log("Essa pessoa já foi cadastrada no banco");
    } else {
      this.listaDePessoas.push(pessoa);
      console.log(`Pessoa ${pessoa.nome} adicionada com sucesso.`);
    }
  }

  static listar(): void {
    console.log("Lista de Pessoas:");
    this.listaDePessoas.forEach((pessoa) =>
      console.log(pessoa.imprimirDados())
    );
  }

  static deletar(pessoa: Pessoa): void {
    const indicePessoa = BancoDeDados.listaDePessoas.indexOf(pessoa);
    if (indicePessoa >= 0) {
      BancoDeDados.listaDePessoas.splice(indicePessoa, 1);
      console.log(`${pessoa.nome} removida com sucesso!`);
    } else {
      console.log(`Erro: ${pessoa.nome} não encontrada`);
    }
  }

  private static encontrarPessoaPeloNome(nomeBuscado: string): Pessoa | undefined {
    return this.listaDePessoas.find((pessoa: Pessoa) => pessoa.nome === nomeBuscado);
  }

  static buscarPeloNome(nomeBuscado: string): void {
    const pessoaEncontrada = this.encontrarPessoaPeloNome(nomeBuscado);

    if (pessoaEncontrada) {
      console.log(`Pessoa encontrada. Dados: ${pessoaEncontrada.imprimirDados()}`);
    } else {
      console.log(`Pessoa ${nomeBuscado} não encontrada`);
    }
  }
}

class Menu {
  constructor() { }

  static adicionarMenu(pessoa: Pessoa): void {
    BancoDeDados.adicionarAoBanco(pessoa);
  }

  static alterarNome(pessoa: Pessoa, novoNome: string): void {
    pessoa.nome = novoNome;
    console.log(`Nome da pessoa alterado para: ${pessoa.nome}`);
  }

  static alterarIdade(pessoa: Pessoa, novaIdade: number): void {
    pessoa.idade = novaIdade;
    console.log(`Idade da pessoa alterada para: ${pessoa.idade}`);
  }

  static alterarEmail(pessoa: Pessoa, novoEmail: string): void {
    pessoa.email = novoEmail;
    console.log(`Email da pessoa alterado para: ${pessoa.email}`);
  }

  static listarMenu(): void {
    BancoDeDados.listar();
  }

  static deletarMenu(pessoa: Pessoa): void {
    BancoDeDados.deletar(pessoa);
  }

  static buscarPeloNome(nomeProcurado: string): void {
    BancoDeDados.buscarPeloNome(nomeProcurado);
  }
}

const pessoa1 = new Pessoa("Sérgio", 29, "sergio@gmail.com");
const pessoa2 = new Pessoa("Lucas", 24, "lucas@gmail.com");
const pessoa3 = new Pessoa("Bianca", 18, "bianca@gmail.com");
const pessoa4 = new Pessoa("Júlia", 13, "julia@gmail.com");
const pessoa5 = new Pessoa("João", 35, "joao@gmail.com");

Menu.adicionarMenu(pessoa1);
Menu.adicionarMenu(pessoa2);
Menu.adicionarMenu(pessoa3);

Menu.listarMenu();

Menu.alterarNome(pessoa1, "Marcelo");
Menu.alterarIdade(pessoa2, 100);
Menu.alterarEmail(pessoa3, "email@alterado.com");

Menu.listarMenu();

Menu.deletarMenu(pessoa1);

Menu.listarMenu();

Menu.buscarPeloNome("Marcelo");
Menu.buscarPeloNome("Matheus");


