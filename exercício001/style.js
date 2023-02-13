function load() {
    var msg = window.document.querySelector('#msg')
    var img = window.document.querySelector('#imagem')
    var data = new Date()
    var hour = data.getHours()
    //var hour = 18
    msg.innerHTML = `Agora são ${hour} horas.`

    if(hour >= 6 && hour < 12) {
        img.setAttribute('src', 'assets/morning.jpg')
    }
    else if(hour >= 12 && hour < 18){
        img.setAttribute('src', 'assets/afternoon.jpg')
        document.body.style.background = '#ff6d00fc'
    }
    else if(hour >= 18 && hour <=24){
        img.setAttribute('src', 'assets/night.jpg')
        document.body.style.background = '#2811d3ab'
    }
    else{
        img.setAttribute('src', 'assets/early.jpg')
        document.body.style.background = '#a73af5'
    }

}
