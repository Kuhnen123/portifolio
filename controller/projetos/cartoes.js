const baseUrl = 'http://localhost:3000/cartoes'; 


export async function buscarCartoes() {
    try {
        const response = await fetch(baseUrl);
        if (!response.ok) {
            throw new Error(`Erro ao buscar os cartões`);
        }
        const cartoes = await response.json();
        criarCartoes(cartoes); 
    } catch (error) {
        console.log('Erro:', error);
    }
}

// Função para criar cartões dinamicamente no DOM
function criarCartoes(cartoes) {
    let sectionCartoes = document.getElementById('cartoes');
    sectionCartoes.innerHTML = ''; 

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

document.addEventListener('DOMContentLoaded', () => {
    buscarCartoes();
});
