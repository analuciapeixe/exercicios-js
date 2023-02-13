function verificar() {
    var data = new Date( )
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = window.document.querySelector('div#res')

    if(fano.value == 0 || fano.value > ano){
        alert('Verifique os dados e tente novamente.')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fano.value 
        var img = document.getElementById('foto')
        var genero = 'eu'
        if(fsex[0].checked){
            genero = 'homem'
            if (idade >=0 && idade <15){

                // a criançinha
 
                img.setAttribute('src', 'baby.jpg')
                document.body.style.background=`#6ced78`
            } else if (idade < 19 ) {
 
                // o jovem 
 
                img.setAttribute('src','teen.jpg')
                document.body.style.background=`#8e9297`
            } else if (idade < 50) {
 
                //o adulto
 
                img.setAttribute('src','adult.jpg') 
                document.body.style.background=`#467ebb`
            }else{
 
                //idoso
 
                img.setAttribute('src','old.jpg')
                document.body.style.background=`#A3A1A8`
            }
 
        } else if (fsex[1].checked){
            genero = 'mulher'
            if (idade >=0 && idade <15){

                // a  criança 
 
                img.setAttribute('src','w-baby.jpg')
                document.body.style.background=`#2ea3d3`
 
            } else if (idade < 19) {
 
                // a jovem
 
                img.setAttribute('src','w-teen.jpg')
                document.body.style.background=`#3acfb59c`
 
            } else if (idade <50) {
 
                // a adulta
 
                img.setAttribute('src','w-adult.jpg')
                document.body.style.background=`#7c7c7c`
            }else {
 
                //idosozinha
 
                img.setAttribute('src','w-old.jpg')
                document.body.style.background=`#FEA443`
            }
        }}

    
        //res.style.textAlign = 'center'
        res.innerHTML = `Detectamos um${(genero == 'mulher')?'a':''} ${genero} de ${idade} ano${(idade>1)?'s':''}.`
    }