import { Pessoa } from "../classes/Pessoa";

export class BancoDeDados {
  static listaDePessoas: Array<Pessoa> = [];

  constructor() {}

  static adicionarAoBanco(pessoa: Pessoa): void {
     this.listaDePessoas.push(pessoa);
     console.log(`Pessoa ${pessoa.nome} adicionada com sucesso.`);
  }

  // listar() {
  //   console.log("Lista de Pessoas:");
  //   this.listaDePessoas.forEach((pessoa) => console.log(pessoa));
  // }

  buscarPeloNome() {}

  atualizar() {}

  deletar() {}
}