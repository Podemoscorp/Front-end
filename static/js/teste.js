let nome = document.querySelector("#nome");
let endereco = document.querySelector("#endereco");
let idade = document.querySelector("#idade");
let email = document.querySelector("#email");
let password = document.querySelector("#senha");
let username = document.querySelector("#username");
let cpf = document.querySelector("#cpf");
let form = document.querySelector("#form");

form.addEventListener("submit", function(event){
    event.preventDefault();

    let dados = {
        nome: nome.value,
        endereço: endereco.value,
        idade: idade.value,
        email: email.value,
        password: password.value,
        username: username.value,
        cpf: cpf.value,
    };

    fetch('http://localhost:8000/alunos/', {
        method: 'POST',
        //body: JSON.stringify(dados)
    })
    .then(function(response){
        return response.json()
    })
    .then(function(response){
        console.log(response);
        alert("Cadastro realizado com sucesso")
    })

})