function idades(){

    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
       
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('Erro verifique os dados e tente novamente')
    }
    else{
        var fsex = document.getElementsByName('sex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked){
            genero = 'Homem'

            if(idade >= 15 && idade <= 22){
                img.setAttribute('src', 'chika shelby.jpg')

            }
            else if(idade >= 22){
                img.setAttribute('src', 'david.jpg')
            }

        }
        else if(fsex[1].checked){
            genero = 'Mulher'

            if(idade >= 14 && idade <=18){
                img.setAttribute('src', 'lucy.jpg')
            }



        }

        res.style.textAlign = 'center'
        res.innerHTML = `Idade:${idade} e Gênero:${genero}`
        res.appendChild(img)

    }


}