var img = document.getElementsByName('img')
var lista = document.getElementById('Lista')
let numal = Math.floor(Math.random(1, 100) * 100)


function rodar(){
    let num1 = document.getElementById('num1')
    let n1 = Number(num1.value)

    if (n1 == 0){
        p1.innerHTML = `Por favor, digite um número!`
    } else if(n1 > numal){
        p1.innerHTML = `O número que você digitou é MAIOR que o número alvo.`
        let item = document.createElement('option')
        item.text = `Adicionado ${n1} - MAIOR`
        lista.appendChild(item)

    } else if(n1 < numal){
        p1.innerHTML = `O número que você digitou é MENOR que o número alvo.`
        let item = document.createElement('option')
        item.text = `Adicionado ${n1} - MENOR`
        lista.appendChild(item)

    } else if(n1 == numal){
        p1.innerHTML = `Parabéns, você ganhou! O número alvo é ${numal}`
        let item = document.createElement('option')
        item.text = `Adicionado ${n1} - ALVO`
        lista.appendChild(item)

        p1.innerHTML += `Caso queira jogar novamente, clique em "Resetar"`
    }
}

function jogo(){
    rodar()
}

function resetar(){
    jogo()
}
