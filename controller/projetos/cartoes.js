let cartoes = [
    {
        nome: 'CARTAO 1',
        valor: 'R$80,90',
        imagem: 'https://img.lovepik.com/png/20231107/Butterfly-Pink-Beautiful-clip-art-vector-decorative-pattern-spring_524591_wh860.png'
    },
    {
        nome: 'CARTAO 2',
        valor: 'R$84,67',
        imagem: 'https://static.vecteezy.com/system/resources/thumbnails/035/999/208/small/ai-generated-purple-violet-beautiful-butterfly-drawing-watercolor-clip-art-illustration-png.png'
    },
    {
        nome: 'CARTAO 3',
        valor: 'R$71,90',
        imagem: 'https://static.vecteezy.com/system/resources/thumbnails/049/092/962/small/blue-butterfly-with-detailed-wings-isolated-transparent-png.png'
    },
    {
        nome: 'CARTAO 4',
        valor: 'R$88,67',
        imagem: 'https://png.pngtree.com/png-clipart/20230929/original/pngtree-watercolor-purple-butterfly-png-image_13017931.png'
    },
    {
        nome: 'CARTAO 5',
        valor: 'R$94,59',
        imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQd8Pylp74K5wf637z36FuL73YnJDPLTINXA&s'
    },
    {
        nome: 'CARTAO 6',
        valor: 'R$90,30',
        imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPStrONiKZqP284TkxMT9elqHko1dIYq-_9yFoqv0fdfhxJNufICzBozYamawA7UpQv5c&usqp=CAU'
    },
    {
        nome: 'CARTAO 7',
        valor: 'R$48,90',
        imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzIxyLye6a14Dfb0EXkYeUVdOE1nOo_ojiHQX00miSlf5TAXHngJ2-1c769JjuobRz_08&usqp=CAU'
    },
    {
        nome: 'CARTAO 8',
        valor: 'R$65,80',
        imagem: 'https://tudoparacolorir.com.br/wp-content/uploads/2023/06/imagem-de-borboletas-1.jpg'
    },
    {
        nome: 'CARTAO 9',
        valor: 'R$64,93',
        imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3FYEcd09ywUSMa4SnXEZQvJ6iVJNJJPsG82WWuCKZ3pVIAE9AE_4byqiHvhr8_HO7Y70&usqp=CAU'
    },
    {
        nome: 'CARTAO 10',
        valor: 'R$60,96',
        imagem: 'https://img.freepik.com/fotos-premium/elegante-borboleta-azul-com-asas-estendidas-em-fundo-branco_983093-8413.jpg'
    },
    {
        nome: 'CARTAO 11',
        valor: 'R$87,93',
        imagem: 'https://img.freepik.com/vetores-gratis/marrom-realista-isolado_1284-3881.jpg'
    },
    {
        nome: 'CARTAO 12',
        valor: 'R$46,50',
        imagem: 'https://png.pngtree.com/png-vector/20231108/ourmid/pngtree-purple-butterfly-cute-png-image_10447004.png'
    },
    {
        nome: 'CARTAO 13',
        valor: 'R$80,67',
        imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG3EeWSPaB1OaQ4WzoosscrMFNKnn-j8mnG22Rd5GigG-r-pCroZgd9T6_wDDTOqgIJT0&usqp=CAU'
    },
    {
        nome: 'CARTAO 14',
        valor: 'R$97,90',
        imagem: 'https://png.pngtree.com/png-clipart/20230421/original/pngtree-real-picture-of-blue-dream-butterfly-png-image_9071031.png'
    },
    {
        nome: 'CARTAO 15',
        valor: 'R$64,80',
        imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEJ16R57ORgNlMhoGyRmwGDQvy17Kcimi3vp_rVEMyoV-1W0P4UHiEi1fhaxTB1n_jlKw&usqp=CAUg'
    },
    {
        nome: 'CARTAO 16',
        valor: 'R$91,98',
        imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQV67T1Tc5WX3LlYqvJQpgXskXi9mba7tNEA&s'
    },
    {
        nome: 'CARTAO 17',
        valor: 'R$833,90',
        imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-YbnOlLj-nsV08KppXl3-I4qcBKdrULi6i7pyHd98dWBKcUjpLpjoY3RTqngMac2aoQo&usqp=CAU'
    },
    {
        nome: 'CARTAO 18',
        valor: 'R$99,99',
        imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTjOntOTo4rfFUvAriyxxfSukZJ9bNLnkGIg&s'
    },
    {
        nome: 'CARTAO 19',
        valor: 'R$68,60',
        imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvqUqS5v0jTLcc7WbebdoGwKG0WTyE7lDM_g_1ymOVHS-ahwfGRT6KKUMqczt5Zwnt6Pc&usqp=CAU'
    },
    {
        nome: 'CARTAO 20',
        valor: 'R$26,99',
        imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnGulSLOk4P4YNSsCcboOk6f0QbeRXjOElERMv-QVk1lCjLq2QyfCeMRGIRQg4abrOItY&usqp=CAU'
    }
];

function criarCartoes() {
    let sectionCartoes = document.getElementById('cartoes');

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

document.addEventListener('DOMContentLoaded', criarCartoes);