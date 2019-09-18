// ES8: Objet.values/Objecct.entries

const obj = {a: 1, b: 2, c: 3}
console.log(Object.values(obj))
console.log(Object.entries(obj))

//Melhorias da Notação Literal
const nome = 'Carla'
const pessoas = {
    nome,
    ola() {
        return 'Oi gente'
    }
}

console.log(pessoas.nome, pessoas.ola())

class Animal {}
class Cachorro extends Animal {
    falar() {
        return 'Au au!'
    }
}

console.log(new Cachorro().falar())