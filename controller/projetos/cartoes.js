let nomes = ['CARTAO 1', 'CARTAO 2', 'CARTAO 3', 'CARTAO 4', 'CARTAO 5', 'CARTAO 6', 'CARTAO 7', 'CARTAO 8', 'CARTAO 9', 'CARTAO 10','CARTAO 11', 'CARTAO 12', 'CARTAO 13', 'CARTAO 14', 'CARTAO 15','CARTAO 16', 'CARTAO 17', 'CARTAO 18', 'CARTAO 19', 'CARTAO 20']
let valores = ['R$59,90','R$60,20','R$10,90','R$57,33','R$88,88','R$23,45','R$45,00','R$78,90','R$19,00','R$27,77','R$33,90','R$66,89','R$44,32','R$32,60','R$90,90','R$99,99','R$34,44','R$77,77','R$89,90','R$23,90',]


export function criarCartoes(){
    let sectionCartoes = document.getElementById('cartoes');

    for(let i = 0; i< nomes.length; i++){
        criarCartoes.className = 'cartao';
        let h1 = document.createElement('h1');
        h1.textContent = nomes[i];
        let h3 = document.createElement('h3');
        h3.textContent = valores[i];
        let p = document.createElement('p');
        p.textContent = 'sobre...';
        }
}