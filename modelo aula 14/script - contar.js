function contagem(){

    var inicio = document.getElementById('inicio1')
    var res = document.querySelector('div#res')
    var fim = document.getElementById('fim1')   
    var passo = document.getElementById('passo1')

    if(inicio.value.length == 0 && fim.value.length == 0 && passo.value.length == 0 ){
       window.alert('Erro! verifique os dados e tente novamente')
    }
    else if(inicio.value.length == 0 ){
        window.alert('Erro! verifique os dados e tente novamente')
    }
    else if(fim.value.length == 0){
        window.alert('Erro! verifique os dados e tente novamente')
    }
    else if(passo.value.length == 0){
        window.alert('Erro! verifique os dados e tente novamente')
    }

    else if(inicio.value.length != 0 && fim.value.length != 0 && passo.value.length != 0 ){

        res.innerHTML =`Contando : `
        var n1 = Number(inicio.value)
        var n2 = Number(fim.value)
        var n3 = Number(passo.value)
        
        var i

        if(n3 <= 0){
            window.alert('Passo inválido! Comece pelo o passo 1')
            n3 = 1
        }


        if(n1 < n2){

            for(i = n1; i <= n2; i+=n3){
            
                res.innerHTML += `${i}`

            }
        }
        else{

            for(i = n1; i >= n2; i-=n3){
            
                res.innerHTML += `${i}`

            }

        }
    }

}