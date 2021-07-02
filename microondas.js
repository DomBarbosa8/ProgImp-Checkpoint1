//Programação Imperativa
//Checkpoint I - 02/07/2021
//Função Microondas

function microondas (opcao, tempo) {
    let tempoPadrao = 0;
    let prato = "";
    let mensagem;
    switch(opcao){
        case 1:
            prato = "Pipoca"; tempoPadrao = 10;
        break;
        case 2: 
            prato = "Macarrão"; tempoPadrao = 8;
        break;
        case 3: 
            prato = "Carne"; tempoPadrao = 15;
        break;
        case 4: 
            prato = "Feijão"; tempoPadrao = 12;
        break;
        case 5:
            prato = "Brigadeiro"; tempoPadrao = 8;
        break;
        default: 
            console.log("Opção inválida!");
    }
    mensagem = "Sua refeição tá no grau, mami!";
    if(tempo<tempoPadrao)mensagem="Temperatura insuficiente"
    if(tempo>=tempoPadrao * 2)mensagem="Putz!Queimou!!!"
    if(tempo>=tempoPadrao * 3)mensagem="Nuu!Explodiu tudo!!!"

    console.log(mensagem);
}
microondas(1,5);
microondas(2,12);
microondas(3,52);
microondas(4,25);
microondas(5,2);
microondas(6,78);

