let cartoes = [
    {
        nome: 'CARTAO 1',
        valor: 'R$80,90',
        imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfPngLiXwU9BaKXFRf6UZK_GmRUnCy9iKDPHkVy5iMP98fj5mYm9odgtTtfYaUylI_P8A&usqp=CAU'
    },
    {
        nome: 'CARTAO 2',
        valor: 'R$84,67',
        imagem: 'https://img.freepik.com/fotos-premium/uma-borboleta-azul-com-manchas-pretas-nas-asas_750054-1707.jpg'
    },
    {
        nome: 'CARTAO 3',
        valor: 'R$71,90',
        imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjNiP4m7PPEkjUS5NPFyz6tPhsNlr5frHaaQnZyOeQ9P5IOWWnJFXQaixWA5oVSjcO9yQ&usqp=CAU'
    },
    {
        nome: 'CARTAO 4',
        valor: 'R$88,67',
        imagem: 'https://png.pngtree.com/png-clipart/20230929/original/pngtree-watercolor-purple-butterfly-png-image_13017931.png'
    },
    {
        nome: 'CARTAO 5',
        valor: 'R$94,59',
        imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-8xaKW1jwP2qyEyrnA5SAXL9a_DQrg4LkaPT6JTc6X_fhc4P8LEuiyGRx1gPnzjKlTi0&usqp=CAU'
    },
    {
        nome: 'CARTAO 6',
        valor: 'R$90,30',
        imagem: 'https://viajes.elpais.com.uy/wp-content/uploads/p-30.jpg'
    },
    {
        nome: 'CARTAO 7',
        valor: 'R$48,90',
        imagem: 'https://img.freepik.com/fotos-premium/as-aguas-vivas-sao-uma-especie-comum-de-agua-viva_14117-9411.jpg'
    },
    {
        nome: 'CARTAO 8',
        valor: 'R$65,80',
        imagem: 'https://img.freepik.com/fotos-premium/uma-agua-viva-e-uma-agua-viva-colorida_902049-13118.jpg'
    },
    {
        nome: 'CARTAO 9',
        valor: 'R$64,93',
        imagem: 'https://images.ecycle.com.br/wp-content/uploads/2024/02/21155338/will-drzycimski-ccJwEyfSZfY-unsplash-scaled.jpg.webp'
    },
    {
        nome: 'CARTAO 10',
        valor: 'R$60,96',
        imagem: 'https://static.nationalgeographicbrasil.com/files/styles/image_3200/public/nationalgeographic2771878.jpg?w=1600&h=2405&p=top'
    },
    {
        nome: 'CARTAO 11',
        valor: 'R$87,93',
        imagem: 'https://fotografias.lasexta.com/clipping/cmsimages02/2016/07/04/6500E72D-EB76-48FE-9D71-C94C6BEC0798/98.jpg?crop=2459,1384,x0,y166&width=1900&height=1069&optimize=high&format=webply'
    },
    {
        nome: 'CARTAO 12',
        valor: 'R$46,50',
        imagem: 'https://i0.wp.com/endemico.org/wp-content/uploads/2022/06/diane-picchiottino-Fo4_-oKnxjE-unsplash-scaled.jpg?fit=2560%2C1707&ssl=1'
    },
    {
        nome: 'CARTAO 13',
        valor: 'R$80,67',
        imagem: 'https://www.ecologistasenaccion.org/wp-content/uploads/2023/08/SebastianHernandisCaballero_1.jpg'
    },
    {
        nome: 'CARTAO 14',
        valor: 'R$97,90',
        imagem: 'https://billiken.lat/wp-content/uploads/2024/01/dt.png'
    },
    {
        nome: 'CARTAO 15',
        valor: 'R$64,80',
        imagem: 'https://i3.wp.com/safesea.com.br/midias/2022/04/Incidentescomaguasvivas.jpg'
    },
    {
        nome: 'CARTAO 16',
        valor: 'R$91,98',
        imagem: 'https://hardcore.com.br/wp-content/uploads/sites/21/2020/12/queimadura-de-agua-viva.jpg'
    },
    {
        nome: 'CARTAO 17',
        valor: 'R$833,90',
        imagem: 'https://super.abril.com.br/wp-content/uploads/2022/08/Conheca-a-agua-viva-que-levou-a-uma-das-maiores-descobertas-da-biologia.jpg?crop=1&resize=1212,909'
    },
    {
        nome: 'CARTAO 18',
        valor: 'R$99,99',
        imagem: 'https://c.files.bbci.co.uk/13DC9/production/_91535318_b157d151-b95c-42e7-8656-437215cc42d2.jpg'
    },
    {
        nome: 'CARTAO 19',
        valor: 'R$68,60',
        imagem: 'https://img.freepik.com/vetores-premium/desenho-a-mao-borboleta-monarca-desenho-animado-vetorial-ilustracao-clipart-fundo-branco_191095-39074.jpg'
    },
    {
        nome: 'CARTAO 20',
        valor: 'R$26,99',
        imagem: 'https://s.widget-club.com/images/YyiR86zpwIMIfrCZoSs4ulVD9RF3/a33ad957566c6d4585ae792782c044ef/ab5b475e24e61f7795c1bfb0d6cf55e6.jpg?q=70&w=500'
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
        img.className = 'imagem-cartao'; 
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