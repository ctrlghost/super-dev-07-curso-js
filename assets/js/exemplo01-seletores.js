function somar(){
// Pergar um elemento da tela por ID
// <elemento id="numero1">
let campoNumero1 = document.getElementById("numero01");

console.log(campoNumero1);

let campoNumero2 = document.getElementById("numero02");
console.log(campoNumero2);

let numero1 = parseFloat(campoNumero1.value);
let numero2 = parseFloat(campoNumero2.value);

console.log(numero1);
console.log(numero2);

let soma = numero1 + numero2;

alert("Soma: " + soma);
}

function subtrair(){
    let campoNumero1 = document.getElementById("numero01");

    console.log(campoNumero1);

    let campoNumero2 = document.getElementById("numero02");
    console.log(campoNumero2);

    let numero1 = parseFloat(campoNumero1.value);
    let numero2 = parseFloat(campoNumero2.value);

    console.log(numero1);
    console.log(numero2);

    let soma = numero1 - numero2;

    alert("Soma: " + soma);
}

function multiplicar(){
    let campoNumero1 = document.getElementById("numero01");
    
    console.log(campoNumero1);

    let campoNumero2 = document.getElementById("numero02");
    console.log(campoNumero2);

    let numero1 = parseFloat(campoNumero1.value);
    let numero2 = parseFloat(campoNumero2.value);

    console.log(numero1);
    console.log(numero2);

    let soma = numero1 * numero2;
    alert("Soma: " + soma);
}

function dividir(){
    let campoNumero1 = document.getElementById("numero01");

    console.log(campoNumero1);

    let campoNumero2 = document.getElementById("numero02");

    console.log(campoNumero2);

    let numero1 = parseFloat(campoNumero1.value);
    let numero2 = parseFloat(campoNumero2.value);

    let soma = numero1 / numero2;
    alert("Soma: " + soma);
}

function definirCor(nomeCor){
    let itens = document.getElementsByClassName("item");

    let cor = "";

    if(nomeCor === "azul"){
        cor = "#34b4de"
    } else if(nomeCor === "preto"){
        cor = "#222222ff"
    } else if(nomeCor === "roxo"){
        cor = "#83229bff"
    } else if(nomeCor === "verde"){
        cor = "#229431ff"
    } else if(nomeCor === "vermelho"){
        cor = "#b81a1aff"
    }

    for(let i = 0; i < itens.length;i++){
        let item = itens[i];
        item.style.backgroundColor = "#34b4de";
    }
}

function alterarVisibilidade(){
    let iframes = document.getElementsByTagName("iframe");
    if (iframes[0].style.display === "inline"){
        iframes[0].style.display === "none";
    }else{
        iframes[0].style.display = "inline";
    }
}


function limparCampos(){
    let campoNome = document.getElementsByName("nome")[0];
    campoNome.value = "";
    let campoSobrenome = document.getElementsByName("sobrenome")[0];
    campoSobrenome.value = "";
}

function apresentarNomeCompleto(){
    let campoNome = document.getElementsByName("nome")[0];
    let campoSobrenome = document.getElementsByName("sobrenome")[0];

    let nome = campoNome.value;
    let sobrenome = campoSobrenome.value;

    let nomeCompleto = `${nome} ${sobrenome}`;
    resultado.innerText = (`Nome completo: ${nomeCompleto}`);
}