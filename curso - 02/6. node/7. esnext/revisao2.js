//arrowfunciton

const soma= (a,b) => a + b
console.log(soma(3,5))

const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})

lexico1()
lexico2()

//parametro default

function log(texto = 'Node') {
    console.log(texto)
}

log()
log('Sidnei')

//operador rest

function total (...numeros) {
    let total = 0
    numeros.forEach (n => total += n )
    return total
}

console.log(total(1,2,3,4))