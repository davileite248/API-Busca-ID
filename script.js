function busca() {
    console.log("Apertou")

    fetch('db.json').then(resposta => resposta.json()).then(corpo => {
        //Variável que busca o valor digitado pelo usuário
        let identificador = document.getElementById('valor').value

        //Variável e busca no JSON e compare com o digitado
        let item = corpo.find(produtos => produtos.id == identificador)

        if(item) {
            document.getElementById('imagem').innerHTML = item.image
        } else {
            document.getElementById('erro').innerHTML = 'Registro Inválido'
        }
    })
}