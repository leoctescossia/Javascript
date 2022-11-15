var inicio = document.getElementById('inicio1')
var res = document.getElementById('tabuada')
var tudo = document.getElementById('tudo')
var n = []



function numero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }
    else{
        return false
    }

}

function lista(n, l){
    if(l.indexOf(Number(n)) != -1 ){
        return true
    }
    else{
        return false
    }
}

function adicionar(){

    if(numero(inicio.value) && !lista(inicio.value, n)){
        n.push(Number(inicio.value))
        let item = document.createElement('option')
        item.text = `Valor adicionado : ${inicio.value}`
        res.appendChild(item)

    }
    else{
        window.alert('Valor ja adicionado ou inválido')
    }
    inicio.value = ''
    inicio.focus()
}

function finalizador(){
    if(n.length == 0){
        window.alert(`Adicione valores!`)
    }
    else{
        let tam = n.length
       
        let maior = n[0]
        let menor = n[0]
        let soma = 0

        for(let i in n){
            soma += n[i]

            if(n[i] > maior){
                maior = n[i]
            }
            if(n[i] < menor){
                menor = n[i]
            }
        }
        let media = soma/tam

        tudo.innerHTML = ''
        tudo.innerHTML += `<p>Ao todo, temos ${tam} números.</p>`
        tudo.innerHTML += `<p>Maior valor : ${maior}</p>`
        tudo.innerHTML += `<p>Menor valor : ${menor}</p>`
        tudo.innerHTML += `<p>Soma: ${soma}</p>`
        tudo.innerHTML += `<p>Média dos valores : ${media}</p>`
    }
}

