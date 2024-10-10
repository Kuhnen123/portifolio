const baseUrl = 'http://localhost:3000/cartoes'; 


export async function buscarCartoes() {
    try {
        const response = await fetch(baseUrl);
        const data = await response.json();
        const cartoes = data.cartoes;
        return cartoes;
        // if (!response.ok) {
        //     throw new Error(`Erro ao buscar os cartões`);
        // }
    } catch (error) {
        console.log('Erro:', error);
    }
}


document.addEventListener('DOMContentLoaded', () => {
    buscarCartoes();
});
