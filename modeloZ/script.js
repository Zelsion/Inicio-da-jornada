function verificar() { 
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById ('txtano')
    var res = document.querySelector ('div#res')
 if (fano.value.lenght == 0 ||  Number(fano.value) > ano) {
    window.alert ('erro meu padrin')
 }  else  {
    var fsex = document.getElementsByName ('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement ('img')
    img.setAttribute ('id','foto')
    if (fsex[0].checked){
        genero = 'Homem'
        if (idade >= 0 && idade < 10)  {
            img.src = 'foto-bebe-m.png'

        } else if (idade < 21) {
            img.src = 'foto-jovem-m.png'
        } else if ( idade < 50) {
            img.src = 'foto-adulto-m.png'
        } else {
            img.src = 'foto-idoso-m.png'
        }

    } else if (fsex[1].checked) {
        genero = 'Mulher'
        if (idade >= 0 && idade < 10)  {

        img.scr = 'foto-bebe-f.png'
        } else if (idade < 21) {
            img.scr = 'foto-jovem-f.png'
        } else if ( idade < 50) {
            img.scr = 'foto-adulto-f.png'
        } else {
            img.scr = 'foto-idoso-f.png'
        }
    }
    res.style.textAlign = 'center'
res.innerHTML = `Detectamos ${genero} com ${idade} anos `
res.appendChild(img)

 }
}
