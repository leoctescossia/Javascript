function contagem(){

    var inicio = document.getElementById('inicio1')
    var res = document.getElementById('tabuada')
    
    if(inicio.value.length == 0){
        
        window.alert(`Conteúdo vazio, digite um número!`)

    }
    else{
        var n = Number(inicio.value)
        var c = 1
        res.innerHTML = ''
        while(c <= 10){
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            res.appendChild(item)
            c++
        }
    }

}