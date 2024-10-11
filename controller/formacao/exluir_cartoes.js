import { criarCartoes } from "./cartoes_criar";

export async function excluirCartoes(index) {
    try {
        const response = await fetch('http://localhost:3000/cartoes/${index}', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: index,
            }),
        });
        criarCartoes();
    } catch (e) {
        console.log(e);
    }
}
