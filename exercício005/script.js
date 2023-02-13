var num = document.querySelector('input#num')
var lista = document.querySelector('select#lista')
var res = document.querySelector('div#res')
var valores = []

function isNumber(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    }else{
        return false
    }
}

function inList(n, l) {
    if(l.indexOf(Number(n)) != -1){
        return true
    } else{
        return false
    }
}

function adicionar(){
    if(isNumber(num.value) && !inList(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    }else{
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if(valores.length == 0){
        window.alert('Adicione valors antes de finalizar.')
    } else{
        var elto = valores.length
        var maiorNum = 0;
        var menorNum = valores[0];
        var soma = 0;
        var media = 0;

        for(var i = 0; i < elto; i ++){
            var numero = valores[i];
            soma += numero;
            
            if(numero > maiorNum){
                maiorNum = numero;
            }
            if(numero < menorNum){
                menorNum = numero; 
            } 
        }

        media = soma / elto
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${elto} cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maiorNum}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menorNum}.</p>`
        res.innerHTML += `<p>A soma de todos esses números é ${soma}.</p>`
        res.innerHTML += `<p>A média de todos esses números é ${media.toFixed(2)}.</p>`
    
    
    }
}