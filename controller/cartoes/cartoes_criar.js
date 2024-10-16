import { buscarCartoes } from "../cartoes/cartoes.js";
import { excluirCartoes } from "../formacao/exluir_cartoes.js";

let sectionCartoes = document.getElementById('cartoes');

export async function criarCartoes() {
  const cartoes = await buscarCartoes();

  console.log('ate aqui tudo bem');

  cartoes.forEach(cartao => {
    let divCartao = document.createElement('div');
    divCartao.className = 'card';

    sectionCartoes.innerHTML = '';

    let img = document.createElement('img');
    img.src = cartao.imagem;
    img.alt = `Imagem de ${cartao.nome}`;
    img.className = 'imagem-cartao card-image';

    let h1 = document.createElement('h1');
    h1.textContent = cartao.nome;

    let h3 = document.createElement('h3');
    h3.textContent = cartao.valor;


    let button = document.createElement('button');
    button.className = 'buttons_card';
    button.textContent = 'EXCLUIR';
    button.addEventListener('click', () => {
      excluirCartoes(i);
    });


    divCartao.appendChild(img);
    divCartao.appendChild(h1);
    divCartao.appendChild(h3);
    divCartao.appendChild(button);


    sectionCartoes.appendChild(divCartao);
  });


  let cartaoAdd = document.createElement('button');
  cartaoAdd.className = 'cartao';
  cartaoAdd.textContent = '+';
  cartaoAdd.addEventListener('click', () => {

  });

  sectionCartoes.appendChild(cartaoAdd);
}
