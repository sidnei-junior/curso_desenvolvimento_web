// criar de forma literal
function fun1() {}

// armazenar em uma variável
const fun2 = function () {}

// armazenar em um array
const array = [function (a, b) { return a + b }, fun1, fun2]

console.log(array[0](2,3))

// Armazenar em um atributo de objeto

const obj = {}

obj.falar = function () { return 'Opa' }
console.log(obj.falar())

// como passar uma função como parâmetro para outra função

function run(fun) {
    fun()
}

run(function () { console.log ( 'Executar...' ) } )

// Uma função pode retornar/conter uma função

function soma (a,b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma (2, 3) (4)