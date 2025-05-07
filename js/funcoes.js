function increase(product) {
    let qtd = document.getElementById('qtd_' + product)
    let total = document.getElementById('total_' + product)
    let price = document.getElementById('price_' + product)

    qtd.innerText ++
    total.innerText = Number(qtd.innerText) * Number(price.innerText)
}

function decrease(product) {
    let qtd = document.getElementById('qtd_' + product)
    let total = document.getElementById('total_' + product)
    let price = document.getElementById('price_' + product)

    qtd.innerText --
    total.innerText = Number(qtd.innerText) * Number(price.innerText)
}
