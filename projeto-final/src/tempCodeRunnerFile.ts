import { Pessoa } from "../classes/Pessoa";
import { BancoDeDados } from "../classes/BancoDeDados";
import { Menu } from "../classes/Menu";

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

// console.log(bancoDeDados);

bancoDeDados.listar();