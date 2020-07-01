let num =document.querySelector('input#fnum')
let lista =document.querySelector('select#flista')
let res =document.querySelector('div#res')
let valores= []

function adicionar(){// aqui é a função para adicionar e verificar se é numero e se ja consta na lista
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = "Valor "  + num.value + " adicionado."
        lista.appendChild(item)
        res.innerHTML = " "

    }else{
        window.alert("Valor inválido ou já encontrado na lista. ")
    }
    num.value = '' // este comando é para limpar a tela do numero depois que digitar e adicionar
    num.focus() // aqui é para colocar o foco no local de digitar o numero
}


function isNumero(n){// aqui é a função para verificar se é ou não um numero e é de 1 a 100
    if(Number(n) >= 1 && Number(n)<= 100){
        return true
    }else{
        return false
    }

}

function inLista(n,l){// esta função é para verificar se o numero esta na lista
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}
function finalizar(){
    if(valores.length == 0){
        window.alert('Adicione valores antes de finalizar .')

    }else{
        let tot = valores.length // tot se refere ao total
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for( pos in valores){// aqui é para verificar quais numeros na lista é maior e menor
            soma += valores [pos]
            if(valores[pos] > maior)
            maior = valores[pos]
            if(valores[pos] < menor)
            menor = valores[pos]
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += "Ao todo, temos " + tot + " números cadastrados . <br> <br>"
        res.innerHTML += "O maior valor digitado foi " + maior + "<br> <br>"
        res.innerHTML += "O menor valor digitado foi " + menor + " <br><br>"
        res.innerHTML += "Somando todos os valores, temos " + soma + "<br><br>"
        res.innerHTML += " A media dos valores digitados é de " + media + "<br><br>"
    }  
}