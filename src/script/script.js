let selectDepartements = document.getElementById('départements');

let btnValidate = document.getElementById('btnValidate');

let optionDepartement = document.getElementsByClassName('otpion-departement');

let inputVille = document.getElementById('ville');

let nomVille = "";
let nomDepartement = "";

const recupKeyEvent = (e) =>{
    e=e || window.event;
    if(e.keyCode == "13"){
       validateForm();
    }
}

const generateSelectDepartements = () => {
    selectDepartements.innerHTML = "";
    let option1 = document.createElement('option');
    option1.innerHTML = "Sélectionner un département";
    selectDepartements.appendChild(option1);

    for(i = 0; i < departement.length; i++){
        let option = document.createElement('option');
        option.innerHTML = departement[i].nom;
        option.value = departement[i].nom;
        option.id = departement[i].code;
        option.classList.add("option-departement")
        selectDepartements.appendChild(option);
    }
};

generateSelectDepartements();

const validateForm = () => {
    nomVille = inputVille.value.toLowerCase();
    nomVille = nomVille[0].toUpperCase() + nomVille.slice(1);
    console.log(nomVille);

    nomDepartement = selectDepartements.value;
    console.log(nomDepartement);
}

btnValidate.addEventListener('click', validateForm)