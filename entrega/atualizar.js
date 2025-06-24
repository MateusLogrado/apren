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
        res.innerHTML = `Logradouro: ${logradouro} <br>`
        res.innerHTML += `complemento: ${complemento} <br>`
        res.innerHTML += `Bairro: ${bairro} <br>`
        res.innerHTML += `localidade: ${localidade} <br>`
        res.innerHTML += `uf: ${uf} <br>`
        res.innerHTML += `responsavel: ${nomeResponsavel} <br>`
        res.innerHTML += `Data: ${data} <br>`

    })
    .catch((err)=>{
        console.error("Erro: ", err)
    })

})