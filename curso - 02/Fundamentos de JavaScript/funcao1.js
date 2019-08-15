//Função sem retorno

function imprimir_soma(a, b){
    console.log(a + b)
}

imprimir_soma(2,3)
imprimir_soma(2)
imprimir_soma(2,10,11,12,15)


//Função com retorno
function soma(a,b = 1){
    return a + b
}

console.log(soma(2,3))
console.log(soma(2))
console.log (soma())