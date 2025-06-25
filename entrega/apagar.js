let res = document.getElementById("res")
let button = document.getElementById("button")

button.addEventListener("click", (e)=>{
    e.preventDefault()

    let codEntrega = document.getElementById("id").value

    const valores = {
        codEntrega: codEntrega
    }

    fetch(`http://localhost:8081/entrega/${codEntrega}`, {
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
        console.error("Erro ao apagar a entrega: ", err)
    })

})