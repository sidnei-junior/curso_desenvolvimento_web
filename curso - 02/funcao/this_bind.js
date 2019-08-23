const pessoa = {
    saudacao : 'Bom dia!',
    falar () {
        console.log (this.saudacao)
    }
}

pessoa.falar ()
const falar = pessoa.falar
falar ()

const fala_de_pessoa = pessoa.falar.bind(pessoa)
fala_de_pessoa()