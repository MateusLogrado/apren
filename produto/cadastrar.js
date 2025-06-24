let res = document.getElementById("res")
let button = document.getElementById("button")

button.addEventListener("click", (e)=>{
    e.preventDefault()

    let nome = document.getElementById("nome").value
    let quantidade = Number(document.getElementById("quantidade").value)
    let preco = Number(document.getElementById("preco").value)
    let total = preco * quantidade
    let entrega_cod = Number(document.getElementById("entrega_cod").value)


    const valores = {
        nome: nome,
        quantidade: quantidade,
        preco: preco,
        total: total,
        entrega: {
            codEntrega: entrega_cod
        }
    }

    fetch(`http://localhost:8081/produto`, {
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(valores)
    })
    .then(resp => resp.body)
    .then(()=>{
        res.innerHTML = `Nome: ${nome} <br>`
        res.innerHTML += `quantidade: ${quantidade} <br>`
        res.innerHTML += `preço: ${preco} <br>`
        res.innerHTML += `total: ${total} <br>`
        res.innerHTML += `Codigo da entrega: ${entrega_cod} <br>`
    })
    .catch((err)=>{
        console.error("Erro: ", err)
    })

})