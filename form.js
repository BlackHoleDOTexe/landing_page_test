const submit = document.getElementById("submit");
const inputName = document.getElementById("inputName");
const inputEmail = document.getElementById("inputEmail");
const inputCpf = document.getElementById("inputCpf");
const checkMasculino = document.getElementById("check_masculino");
const checkFeminino = document.getElementById("check_feminino");

submit.addEventListener("click", validate);

function validate(e){
    e.preventDefault();
    let valid = true;

    // Validação do nome
    if(!inputName.value){
        inputName.classList.add("boxInputError");
        valid = false;
    } else {
        inputName.classList.remove("boxInputError");
    }

    // Validação do email
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if(!inputEmail.value || !emailRegex.test(inputEmail.value)){
        inputEmail.classList.add("boxInputError");
        valid = false;
    } else {
        inputEmail.classList.remove("boxInputError");
    }

    // Validação do CPF
    if(!inputCpf.value || inputCpf.value.length !== 11){
        inputCpf.classList.add("boxInputError");
        valid = false;
    } else {
        inputCpf.classList.remove("boxInputError");
    }

    // Validação do sexo
    if(!checkMasculino.checked && !checkFeminino.checked){
        document.querySelector(".checkboxes").classList.add("boxInputError");
        valid = false;
    } else {
        document.querySelector(".checkboxes").classList.remove("boxInputError");
    }

    if(valid){
        // Envia os dados se tudo estiver correto
    }else{
        alert("Preencha corretamente todos os campos!");
    }
}
