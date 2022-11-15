function numeros(){
    let escolha = document.getElementsByName('op')
    let res = document.querySelector('div#res')
    let num = document.getElementById('num')
    let num2 = document.getElementById('num2')

    if(escolha[0].checked){
        let soma = Number(num.value) + Number(num2.value)
        res.innerHTML = `Soma : ${soma}`
    }

    if(escolha[1].checked){
        let sub = Number(num.value) - Number(num2.value)
        res.innerHTML = `Subtração : ${sub}`
    }

    if(escolha[2].checked){
        let multi = Number(num.value) * Number(num2.value)
        res.innerHTML = `Multiplicação : ${multi}`
    }

    if(escolha[3].checked){
       let num1 = Number(num.value) 
       let num3 = Number(num2.value)
       let pot = Math.pow(num1,num3)
       res.innerHTML = `Pontenciação : ${pot}` 
    }
}