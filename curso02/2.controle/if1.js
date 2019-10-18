function soBoaNoticia (nota) {
    if (nota >= 7) {
        console.log('Aprovado com ' + nota)
    }
}

soBoaNoticia (8.1)
soBoaNoticia (6.4)

function seForVerdadeEuFalo (valor) {
    if(valor) {
        console.log('É verdade ... ' + valor)
    }
}

seForVerdadeEuFalo ('Eu luto para manter a castidade')
seForVerdadeEuFalo ('Jesus me ama!')