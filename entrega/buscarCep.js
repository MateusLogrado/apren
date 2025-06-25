let buscarCep = document.getElementById("buscarCep")

buscarCep.addEventListener("click", (e)=>{
    e.preventDefault()

    let cep = document.getElementById("cep").value
    let logradouro = document.getElementById("logradouro")
    let bairro = document.getElementById("bairro")
    let localidade = document.getElementById("localidade")
    let uf = document.getElementById("uf")

    fetch(`http://viacep.com.br/ws/${cep}/json/`)
    .then(resposta => resposta.json())
    .then(dados => {
        
        logradouro.value = dados.logradouro;
        bairro.value = dados.bairro;
        localidade.value = dados.localidade;
        uf.value = dados.uf;
        
    })
    .catch((err)=>{
        console.error("Erro : ", err)
    })

})