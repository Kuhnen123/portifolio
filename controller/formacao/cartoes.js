const baseUrl = 'http://localhost:3000/cartoes'; 


export async function buscarCartoes() {
    try {
        const response = await fetch(baseUrl);
        const data = await response.json();
        const cartoes = data.cartoes;
        return cartoes;
    } catch (error) {
        console.log('Erro:', error);
    }
}