const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

//sem callback

let notas_baixas = []
for (let i in notas) {
    if (notas[i] < 7) {
        notas_baixas.push(notas[i])
    }
}

console.log(notas_baixas)

const notas_baixas2 = notas.filter(a => a < 7)
console.log(notas_baixas2)