let buscarId = document.getElementById("buscarId")

buscarId.addEventListener("click", (e)=>{
    e.preventDefault()

    let id = document.getElementById("id").value
    let nome = document.getElementById("nome")
    let quantidade = document.getElementById("quantidade")
    let preco = document.getElementById("preco")

    fetch(`http://localhost:8081/produto/${id}`, {
        method: "GET",
        headers: {
            "Content-Type":"application/json"
        }
    })
    .then(resposta => resposta.json())
    .then(dados => {
        
        nome.value = dados.nome
        quantidade.value = dados.quantidade
        preco.value = dados.preco
        
    })
    .catch((err)=>{
        console.error("Erro : ", err)
    })
})