function rand ({min = 0, max = 1000}) {
    const valor = Math.random() * (max-min) + min
    return Math.floor(valor)
}

const obj = {min: 2, max: 5}

console.log(rand(obj))
