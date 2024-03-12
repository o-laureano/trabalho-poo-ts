import { Pessoa } from "../classes/Pessoa";
import { BancoDeDados } from "../classes/BancoDeDados";

export class Menu {
  private _bancoDeDados: BancoDeDados;

  constructor(bancoDeDados: BancoDeDados) {
    this._bancoDeDados = bancoDeDados;
  }

  // adicionarMenu(pessoa: Pessoa) {
  //   this._bancoDeDados.adicionarAoBanco(pessoa);
  // }


  listar() {}

  buscarPeloNome() {}

  atualizar() {}

  deletar() {}
}