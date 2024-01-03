const form = document.getElementById('formTelefonica');
const nomes = [];
const numeros = [];

let contatos = ``;

form.addEventListener('submit', function(e){
    e.preventDefault();
    adicionaContatos();
    novoContato();
    mascaraTelefonica();
});

function adicionaContatos(){
    const inputNomeContato = document.getElementById('nomeContato');
    const inputTelContato = document.getElementById('telContato');

    nomes.push(inputNomeContato.value);
    numeros.push(inputTelContato.value);

    let linha = `<str>`;
    linha += `<td>${inputNomeContato.value} </td>`;
    linha += `<td>${inputTelContato.value} </td> `;
    linha += `</tr>`;
    contatos += linha;

    inputNomeContato.value = ``;
    inputTelContato.value = ``;
}
function novoContato(){
    const corpoDaTabela = document.querySelector('tbody');
    corpoDaTabela.innerHTML = contatos;
}
function mascaraTelefonica(){
    const numeroPhone = (event) => {
        let input = event.target;
        input.value = mascaraPhone(input.value);
    }
    const mascaraPhone = (value) => {
        if (!value) return "";
        value = value.replace(/\D/g, '');
        value = value.replace(/(\d{2})(\d)/, "($1) $2");
        value = value.replace(/(\d)(\d{4})$/, "$1-$2");
        return value;
    }
    const inputTelContato = document.getElementById('telContato');
    inputTelContato.addEventListener('input', numeroPhone);
}
mascaraTelefonica();