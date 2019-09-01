
let dobro = function (a) {
    return 2 * a
}


dobro = (a) => {
    return 2 * a
}


dobro = a => 2 * a

console.log (dobro(Math.PI))

let ola = function () {
    return 'Óla'
}

ola = () => 'Olá'
ola = _ => 'Olá' // possui um parametro

console.log(ola())