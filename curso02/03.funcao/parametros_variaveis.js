function soma () {
    let soma = 0
    for (i in arguments){
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(2))
console.log(soma(2,7,8))
console.log(soma(3,8,9,7))
console.log(soma(1,2.4,'eus'))