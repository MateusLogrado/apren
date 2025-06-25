let buscarId = document.getElementById("buscarId")

buscarId.addEventListener("click", (e)=>{
    e.preventDefault()

    let id = Number(document.getElementById("id").value)
    let logradouro = document.getElementById("logradouro")
    let complemento = document.getElementById("complemento")
    let bairro = document.getElementById("bairro")
    let localidade = document.getElementById("localidade")
    let uf = document.getElementById("uf")
    let nomeResponsavel = document.getElementById("nomeResponsavel")

    fetch(`http://localhost:8081/entrega/${id}`, {
        method: "GET",
        headers: {
            "Content-Type":"application/json"
        }
    })
    .then(resposta => resposta.json())
    .then(dados => {
        
        logradouro.value = dados.logradouro
        complemento.value = dados.complemento
        bairro.value = dados.bairro
        localidade.value = dados.localidade
        uf.value = dados.uf;
        nomeResponsavel.value = dados.nomeResponsavel
        
    })
    .catch((err)=>{
        console.error("Erro : ", err)
    })
})