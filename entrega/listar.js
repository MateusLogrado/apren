let res = document.getElementById("res")
let button = document.getElementById("button")

button.addEventListener("click", (e)=>{
    e.preventDefault()
    res.innerHTML = ""

    fetch(`http://localhost:8081/produto`, {
        method: "GET",
        headers: {
            "Content-Type":"application/json"
        }
    })
    .then(resp => resp.json())
    .then(valores => {
        valores.forEach(val => {
            res.innerHTML += `Nome: ${val.nome} <br>`
            res.innerHTML += `quantidade: ${val.quantidade} <br>`
            res.innerHTML += `preço: R$${val.preco} <br>`
            res.innerHTML += `total: R$${val.total} <br><br>`
            res.innerHTML += `----------------------------------------------- <br>`
        });
    })
    .catch((err)=>{
        console.error("Erro ao listar a entrega: ", err)
    })

})