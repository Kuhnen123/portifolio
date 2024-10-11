import{cadastrarCartoes} from "";
 let telaCad = document.getElementById('telacadastro');
 export function escondeTelaCad (){
    telaCad.style.display = '-100vw';
     
 }
 export function mostraTelaCad(){
    telaCad.style.left = '0vw';
     
 }
 export function recolherDasos(){
    let nome = document.getElementById('nome');
    let valor = document.getElementById('valor');
    let link = document.getElementById('link');

    cadastrarCartoes(nome.value, valor.value, link.value);
    escondeTelaCad();
    nome.value = '';
    valor.value = '';
    link.value = '';
     
 }