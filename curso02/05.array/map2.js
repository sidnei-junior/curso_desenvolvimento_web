const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

// Retorna array apenas com os preços

//Minha tentantiva
const transformandoEmObjeto = e => JSON.parse(e)
const requerindoPreco = e => e.preco

console.log(carrinho.map(transformandoEmObjeto).map(requerindoPreco))

//Com o professor

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)