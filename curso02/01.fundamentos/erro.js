function tratarErroELancar(erro) {
    //throw new Error('...')
    throw 10
}

function imprimir_nome_gritado(obj) {
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log('final')
    }
    
}

const obj = { name: 'Roberto' }
imprimir_nome_gritado(obj)