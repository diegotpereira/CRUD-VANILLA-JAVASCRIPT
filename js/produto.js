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
    let ChavesObjetos

    for (items of data) {
        ChavesObjetos = Object.keys(items)
    }
    let row = document.createElement("tr")

    for (let key of ChavesObjetos) {
        let cabecalho = document.createElement("th")
        cabecalho.innerText = key
        row.appendChild(cabecalho)
    }
    thead.appendChild(row)
    table.appendChild(thead)
}

const tabelaCorpo = data => {
    for (let items of data) {
        let ChavesObjetos = Object.values(items)
        let linha = document.createElement("tr")

        for (let values of ChavesObjetos) {
            let celula = document.createElement("td")
            celula.innerText = values
            linha.appendChild(celula)
        }
        tbody.appendChild(linha)
    }
    table.appendChild(tbody)
    console.log(table)
}

const criarItem = () => {
    const nome = document.querySelector("#nome").value
    const quantidade = document.querySelector("#quantidade").value
    const preco = document.querySelector("#preco").value
    const precoTotal = document.querySelector("#preco_total").value

    if (nome === "") {
        alert("O campo nome não pode estar vazio!")
        document.querySelector("#nome").focus()
        return
    }

    if (quantidade === "") {
        alert("O campo quantidade não pode estar vazio..!")
        document.querySelector("#quantidade").focus()
        return
    }

    if (preco === "") {
        alert("O campo preço não pode estar vazio..!")
        return
    }

    if (precoTotal === "") {
        alert("O Preço Total não pode ser vazio..!")
        return
    }

    const dadosFormulario = {
        nome,
        quantidade,
        preco,
        precoTotal
    }
    array.push(dadosFormulario)

    try {
        if (localStorage.getItem("  ") === null) {
            localStorage.setItem("listaProdutos", JSON.stringify(array))

        } else {
            let armazenar = JSON.stringify(localStorage.getItem("listaProdutos"))
            armazenar.push(dadosFormulario)
            localStorage.setItem(listaProdutos, JSON.stringify(armazenar))
            console.log(armazenar)
        }

    } catch (erro) {
        console.error(erro)
    }
    alert("Você adicionou o item produto com sucesso..!")
    form.reset()
}

const exibirItem = () => {
    const armazenar = JSON.parse(localStorage.getItem("listaProdutos"))
    if (armazenar && armazenar.length >= 1) {
        if (table.rows.length < 1) {
            tableHead(armazenar)
            tabelaCorpo(armazenar)
        }
    } else {
        return
    }
}

table.onclick = () => {
    let linha = table.rows
    for (let i = 0; i < linha.length; i++) {
        linha[i].addEventListener("click", ativarItem)
    }
}

function ativarItem() {
    rowIndex = this.rowIndex

    let nome = document.querySelector("#nome")
    let quantidade = document.querySelector("#quantidade")
    let preco = document.querySelector("#preco")
    let precoTotal = document.querySelector("#preco_total")

    nome.value = this.cells[0].innerText
    quantidade.value = this.cells[1].innerText
    preco.value = this.cells[2].innerText
    precoTotal.value = this.cells[3].innerText
}

const atualizarItem = () => {
    const armazenar = JSON.parse(localStorage.getItem("listaProdutos"))
    const nome = document.querySelector("#nome").value
    const quantidade = document.querySelector("#quantidade").value
    const preco = document.querySelector("#preco").value
    const precoTotal = document.querySelector("#preco_total").value

    let tableRowIndex = rowIndex - 0

    if (tableRowIndex) {
        if (nome === "") {
            alert("O campo nome não pode estar vazio")
            document.querySelector("#nome").focus()
            return
        }
        if (quantidade === "") {
            alert("O campo quantidade não pode estar vazio")
            document.querySelector("#quantidade").focus()
            return
        }
        if (preco === "") {
            alert("O campo preço não pode estar vazio")
            document.querySelector("#preco").focus()
            return
        }
        if (precoTotal === "") {
            alert("O campo preço total não pode estar vazio")
            document.querySelector("#precoTotal").focus()
            return
        }
        let confirme = window.confirm("Tem certeza que deseja atualizar este item")

        if (confirme === true) {
            tableRowIndex && armazenar.splice(tableRowIndex, 0, {
                nome,
                quantidade,
                preco,
                precoTotal
            })
            localStorage.setItem("listaProdutos", JSON.stringify(armazenar))
            console.log(armazenar)
            window.alert("A lista de itens foi atualizada")
            window.location.reload()

        } else {
            return
        }
    } else {
        return
    }
}

const deletarItem = () => {
    let confirme = window.confirm("Tem certeza que deseja deletar esse item")
    if (confirme == true) {
        const armazenar = JSON.parse(localStorage.getItem("listaProdutos"))
        let tableRowIndex = rowIndex - 0
        if (tableRowIndex) {
            tableRowIndex && armazenar.splice(tableRowIndex, 0)
            localStorage.setItem("listaProdutos", JSON.stringify(armazenar))
            window.location.reload()
            console.log(armazenar)

        } else {
            return

        }
    } else {

        return false
    }
}