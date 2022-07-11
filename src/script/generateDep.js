import { sortBySmaller } from "../../utils.js";

const generateDep = () => {
    let selectDepartements = document.getElementById('départements');
    let selectVille = document.getElementById('ville');

    let btnValidate = document.getElementById('btnValidate');

    let nomDepartement = "";


    const generateSelectDepartements = () => {
        selectDepartements.innerHTML = "";
        let option1 = document.createElement('option');
        option1.innerHTML = "Sélectionner un département";
        selectDepartements.appendChild(option1);

        for(let i = 0; i < departement.length; i++){
            let option = document.createElement('option');
            option.innerHTML = departement[i].code + " - " + departement[i].nom;
            option.value = departement[i].nom;
            option.id = departement[i].code;
            option.classList.add("option-departement")
            selectDepartements.appendChild(option);
        }
    };

    generateSelectDepartements();

    selectDepartements.addEventListener('change', () =>{
        selectVille.innerHTML = "";
        nomDepartement = selectDepartements.value;
        fetch("https://data.economie.gouv.fr/api/records/1.0/search/?dataset=prix-carburants-fichier-instantane-test-ods-copie&q=&lang=js&facet=id&facet=adresse&facet=ville&facet=prix_maj&facet=prix_nom&facet=com_arm_name&facet=epci_name&facet=dep_name&facet=reg_name&facet=services_service&facet=horaires_automate_24_24&refine.dep_name="+nomDepartement+"&rows=10000")
        .then((res) => {
            if(res.ok){
                return res.json();
            }
        })
        .then((data)=>{
            let array = [];
            for(let i = 0; i < data.facet_groups[5].facets.length; i++){
                array.push(data.facet_groups[5].facets[i].name);
                sortBySmaller(array);
            }
            for(let i = 0; i < array.length; i++){
                let option = document.createElement('option');
                option.innerHTML = array[i];
                option.value = array[i];
                option.id = array[i];
                option.classList.add("option-ville")
                selectVille.appendChild(option);
            }
        })
        .catch((err)=>{
            console.log(err);
        })
    
    })
}

export { generateDep };