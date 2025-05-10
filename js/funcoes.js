function operate(product, operation) {
    const qtd = document.getElementById('qtd_' + product)
    const total = document.getElementById('total_' + product)
    const price = document.getElementById('price_' + product)

    if (operation == '-' && qtd.innerText == 0) { return }

    operation == '+' ? qtd.innerText++ : qtd.innerText--
    
    let value = getNumber(price.innerText)
    total.innerText = formatValue(Number(qtd.innerText) * Number(value))

    updateSubtotal()
}

function updateSubtotal() {
    const subtotal = document.getElementById('subtotal')
    total = 0

    for (let i = 1; i < 4; i++) {
        value = getNumber(document.getElementById('total_' + i).innerText)
        total += Number(value)
    }
    
    subtotal.innerText = formatValue(total)
}

function getNumber(num) { return num.replace(/\D/g, '') }

function formatValue(num) { return 'R$ ' + num.toLocaleString('pt-BR') }