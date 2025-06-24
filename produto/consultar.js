let res = document.getElementById("res")
let button = document.getElementById("button")

button.addEventListener("click", (e)=>{
    e.preventDefault()

    let codProduto = document.getElementById("id").value

    fetch(`http://localhost:8081/produto/${codProduto}`, {
        method: "GET",
        headers: {
            "Content-Type":"application/json"
        }
    })
    .then(resp => resp.json())
    .then(val => {
        res.innerHTML = `Nome: ${val.nome} <br>`
        res.innerHTML += `quantidade: ${val.quantidade} <br>`
        res.innerHTML += `preço: ${val.preco} <br>`
        res.innerHTML += `total: ${val.total} <br>`
        res.innerHTML += `----------------------------------------------- <br>`
    })
    .catch((err)=>{
        console.error("Erro: ", err)
    })

})