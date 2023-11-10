//- Variáveis☑
//- Operadores☑
//- Laços de repetição☑
//- Estruturas de decisões☑
//- Funções☑

let saldoVitorias = subtracao(10, 7)
let ranking = undefined
let colocacao = 0

function subtracao(vitorias, derrotas){
    let resultadoDaSubtracao = vitorias - derrotas
    return resultadoDaSubtracao
}

if (saldoVitorias <= 10){
    ranking = "Ferro"
} else if (saldoVitorias >= 11 && saldoVitorias <= 20){
    ranking = "Bronze"
} else if (saldoVitorias >= 21 && saldoVitorias <= 50){
    ranking = "Prata"
} else if (saldoVitorias >= 51 && saldoVitorias <= 80){
    ranking = "Ouro"
} else if (saldoVitorias >= 81 && saldoVitorias <= 90){
    ranking = "Diamante"
} else if (saldoVitorias >= 91 && saldoVitorias <= 100){
    ranking = "Lendário"
} else {
    ranking = Imortal
}   
//número aleatório
while (colocacao <= 1) {
    colocacao = Math.floor(Math.random() * 100)
}

console.log("O Herói tem de saldo " + saldoVitorias + " e está na colocação " + colocacao + "º" + " do nível " + ranking)