let res = document.getElementById("res")
let button = document.getElementById("button")

button.addEventListener("click", (e)=>{
    e.preventDefault()
    res.innerHTML = ""

    fetch(`http://localhost:8081/entrega`, {
        method: "GET",
        headers: {
            "Content-Type":"application/json"
        }
    })
    .then(resp => resp.json())
    .then(valores => {
        valores.forEach(val => {
            res.innerHTML += `Logradouro: ${val.logradouro} <br>`
            res.innerHTML += `complemento: ${val.complemento} <br>`
            res.innerHTML += `Bairro: ${val.bairro} <br>`
            res.innerHTML += `localidade: ${val.localidade} <br>`
            res.innerHTML += `uf: ${val.uf} <br>`
            res.innerHTML += `responsavel: ${val.nomeResponsavel} <br>`
            res.innerHTML += `Data: ${val.data} <br>`
            val.produtos.forEach(prod => {
                res.innerHTML += `Nome do produto: ${prod.nome} <br>`
                res.innerHTML += `Quantidade: ${prod.quantidade} <br>`
                res.innerHTML += `Preço: ${prod.preco} <br>`
                res.innerHTML += `Total: ${prod.total} <br><br>`
            });
            res.innerHTML += `----------------------------------------------- <br>`
        });
    })
    .catch((err)=>{
        console.error("Erro: ", err)
    })

})