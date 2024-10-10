import { buscarCartoes } from "./cartoes.js";
import { criarCartoes } from "./cartoes_criar.js";

document.addEventListener("DOMContentLoaded", () => {
    criarCartoes();
    buscarCartoes();
});