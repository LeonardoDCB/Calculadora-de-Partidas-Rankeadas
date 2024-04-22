
function calcPartidas(vit,derr) {
    let partidas = vit - derr
    valordeAB = partidas
    return partidas
}

let resultado = calcPartidas (50, 3)

if (resultado <= 10 ) {
   resultado = "Ferro"
}
else if (resultado >= 11 && resultado <= 20) {
    resultado = "Bronze"
}
else if (resultado >= 21 && resultado <=50) {
    resultado = "Prata"
}
else if (resultado >= 51 && resultado <= 80){
    resultado = "Ouro"
}
else if (resultado >= 81 && resultado <= 90){
    resultado = "Diamante"
}
else if (resultado >= 91 && resultado <= 100){
    resultado = "Lendário"
}
else if (resultado >= 100) {
    resultado = "Imortal"
}


console.log ("O Heroi tem o saldo de " + valordeAB + " vitórias e está no nivel " + resultado)