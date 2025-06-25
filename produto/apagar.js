let res = document.getElementById("res")
let button = document.getElementById("button")

button.addEventListener("click", (e)=>{
    e.preventDefault()

    let codProduto = document.getElementById("id").value

    const valores = {
        codProduto: codProduto
    }

    fetch(`http://localhost:8081/produto/${codProduto}`, {
        method: "DELETE",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(valores)
    })
    .then(resp => {
        res.innerHTML = "Dados excluidos com sucesso"
    })
    .then()
    .catch((err)=>{
        console.error("Erro ao apagar o produto: ", err)
    })

})