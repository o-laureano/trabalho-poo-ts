export class Pessoa {
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

  // adicionar() {}

  // listar() {}

  buscarPeloNome() {}

  atualizar() {}

  deletar() {}
}

