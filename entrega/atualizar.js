let res = document.getElementById("res")
let button = document.getElementById("button")

button.addEventListener("click", (e)=>{
    e.preventDefault()

    let codEntrega = document.getElementById("id").value
    let logradouro = document.getElementById("logradouro").value
    let complemento = document.getElementById("complemento").value
    let bairro = document.getElementById("bairro").value
    let localidade = document.getElementById("localidade").value
    let uf = document.getElementById("uf").value
    let nomeResponsavel = document.getElementById("nomeResponsavel").value

    const valores = {
        codEntrega: codEntrega,
        logradouro: logradouro,
        complemento: complemento,
        bairro: bairro,
        localidade: localidade,
        uf: uf,
        nomeResponsavel: nomeResponsavel,
    }

    fetch(`http://localhost:8081/entrega/${codEntrega}`, {
        method: "PUT",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(valores)
    })
    .then(resp => resp.body)
    .then(()=>{
        res.innerHTML = "Dados atualizados com sucesso"
    })
    .catch((err)=>{
        console.error("Erro ao atualizar a entrega: ", err)
    })

})