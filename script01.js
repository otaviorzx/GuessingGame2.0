var lista = document.getElementById('Lista')
let numal = Math.floor(Math.random(1, 100) * 100)
var p1 = document.getElementById('p1')
var matriz1 = []
var img = document.getElementById('img')

function aleatorio(){
    numal = Math.floor(Math.random(1, 100) * 100)
}

function rodar(){
    let num1 = document.getElementById('num1')
    let n1 = Number(num1.value)

    if (n1 > 100 || n1 < 1){

        img.src = "imagens/error-200.png"
        p1.innerHTML = `Por favor, digite um número entre 1 e 100`
        window.alert('Por favor, digite um número entre 1 e 100')

    } else if(n1 > numal){

        p1.innerHTML = `O número que você digitou é MAIOR que o número alvo.`

        img.src = 'imagens/maior-200.png'
        let item = document.createElement('option')
        item.text = `Adicionado ${n1} - MAIOR`
        lista.appendChild(item)
        matriz1.push(n1)


    } else if(n1 < numal){

        p1.innerHTML = `O número que você digitou é MENOR que o número alvo.`

        img.src = 'imagens/menor-200.png'
        let item = document.createElement('option')
        item.text = `Adicionado ${n1} - MENOR`
        lista.appendChild(item)
        matriz1.push(n1)

    } else if(n1 == numal){

        p1.innerHTML = `Parabéns, você ganhou! O número alvo é ${numal}.`

        img.src = 'imagens/certo-200.png'
        let item = document.createElement('option')
        item.text = `Adicionado ${n1} - ALVO`
        lista.appendChild(item)
        matriz1.push(n1)

        p1.innerHTML += `<br>Caso queira jogar novamente, clique em "Resetar" (não esqueça de tirar o número atual da caixa de número)<br>`
        
        p1.innerHTML += `<br>------------------------------------------<br>`

        p1.innerHTML += `<br>Você precisou digitar ${matriz1.length} números para descobrir o alvo.`
    }
}

function resetar(){
    matriz1 = []
    p1.innerHTML = ''
    lista.length = 0
    aleatorio()
    rodar()
}
