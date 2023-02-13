function executar(){
    var ini = document.getElementById('início')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[ERROR] Faltam dados!!!')
    }else{
        res.style.textAlign = 'center'
        res.innerHTML = 'Contando: <br>'

        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if(p <= 0){
            window.alert(`Passo inválido. Considerando passo: 1.`)
            p = 1
        }

        if(i < f){
            for(let c = i; c <= f; c += p){
                //número crescente
                res.innerHTML += `${c}  \u{1F449}`
            }
            res.innerHTML += ` \u{1F3C1}`
        }else{
            //número decrescente
            for(let c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F449}`
            }
            res.innerHTML += ` \u{1F3C1}`
        }
    }
}