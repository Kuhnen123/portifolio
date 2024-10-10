import { buscarCartoes } from "./cartoes.js";
let sectionCartoes = document.getElementById('cartoes');
sectionCartoes.innerHTML = '';

export async function criarCartoes() {
const cartoes = await buscarCartoes();

 cartoes.forEach(cartao => {
    let divCartao = document.createElement('div');
    divCartao.className = 'card';

    let img = document.createElement('img');
    img.src = cartao.imagem;
    img.alt = `Imagem de ${cartao.nome}`;
    img.className = 'imagem-cartao card-image';
    divCartao.appendChild(img);

    let h1 = document.createElement('h1');
    h1.textContent = cartao.nome;
    divCartao.appendChild(h1);

    let h3 = document.createElement('h3');
    h3.textContent = cartao.valor;
    divCartao.appendChild(h3);

    let p = document.createElement('p');
    p.textContent = 'Sobre...';
    divCartao.appendChild(p);

    sectionCartoes.appendChild(divCartao);
  });
}