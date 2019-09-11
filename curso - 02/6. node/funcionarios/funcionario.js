const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const isChina = funcionario => funcionario.pais == 'China'
const isMulher = funcionario => funcionario.genero == 'F'
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}


axios.get(url).then(response => {
    const funcionarios = response.data
    const mulherChinesaMenorSalario = funcionarios.filter(isChina).filter(isMulher).reduce(menorSalario)

    console.log(mulherChinesaMenorSalario)
})



