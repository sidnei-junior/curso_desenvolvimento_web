const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true}
]

// Minha tentativa 

const todosBolsistasMy = (todos, aluno) => (todos && aluno.bolsista)
const algumBolsistaMy = (algum, aluno) => (algum || aluno.bolsista)

const todosSaoB = alunos.reduce(todosBolsistasMy, true)
const algumEB = alunos.reduce(algumBolsistaMy, false)

console.log(todosSaoB, algumEB)
/**
 * Encontrei dificuldade sem usar o map, perebi que deixa a função arrow muito especifica para o array que estou usando
 * Melhor seria usar o map antes e passar para a callback apenas o dado que interessa
*/
// com o professor

const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista ).reduce(todosBolsistas))

const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista ).reduce(algumBolsista))
