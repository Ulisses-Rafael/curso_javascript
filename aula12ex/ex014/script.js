function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML =`Agora são ${hora} horas.`
    if (hora>= 0 && hora < 12){
        //Bom dia!!
        img.src = "dia.jpg"
        window.document.body.style.background = '#ffd633'
    }else if (hora >= 12 && hora < 18){
        //Boa tarde!!
        img.src="tarde.jpg"
        window.document.body.style.background ='#d6b48f'
    }else {
        //Boa noite!!
        img.src="noite.jpg"
        window.document.body.style.background ='#737373'
    }
}
