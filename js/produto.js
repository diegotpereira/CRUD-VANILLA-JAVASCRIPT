const form = document.querySelector("form")
const table = document.querySelector("table")
const thead = document.querySelector("thead")
const tbody = document.querySelector("tbody")
const array = []
let rowIndex

document.querySelector("#preco").oninput = () => {
    let quantidade = document.querySelector("#quantidade").value
    let preco = document.querySelector("#preco").value
    let precoTotal = document.querySelector("#preco_total")
    let somaTotal = parseInt(quantidade) * parseInt(preco)
    precoTotal.value = somaTotal
}

const tableHead = data => {
    let ObjectKeys

    for (items of data) {

    }
}