import { toggleCard } from "../../utils.js";

const validateForm = () => {
    let divResults = document.getElementById('container');
    let selectDepartements = document.getElementById('départements');

    let selectVille = document.getElementById('ville');
    let optionDepartement = document.getElementsByClassName('otpion-departement');

    let divForm = document.getElementById('form');
    let essences = document.getElementsByClassName('essence');


    let nomVille = "";
    let nomDepartement = "";

    divResults.innerHTML = "";
     nomVille = selectVille.value;
     
 
     nomDepartement = selectDepartements.value;
    let refine = "";
     Array.from(essences).forEach(essence => {
        if(essence.checked){
            refine = refine + "&refine.prix_nom=" + essence.value;
        }
    })
     
    fetch("https://data.economie.gouv.fr/api/records/1.0/search/?dataset=prix-carburants-fichier-instantane-test-ods-copie&q=&lang=js&facet=id&facet=adresse&facet=ville&facet=prix_maj&facet=prix_nom&facet=com_arm_name&facet=epci_name&facet=dep_name&facet=reg_name&facet=services_service&facet=horaires_automate_24_24&refine.dep_name="+nomDepartement+"&refine.com_arm_name="+nomVille+refine+"&rows=10000")
     .then((res) => {
         if(res.ok){
             return res.json();
         }
     })
     .then((results)=>{
        let data = results.records;
        let array = [];
        for(let i = 0; i < data.length; i++){
            let isTrue = false;
            for(let j = 0; j < array.length; j++){
                if(array[j].adresse == data[i].fields.adresse){
                    isTrue = true;
                    array[j].essence.push({
                        
                        maj: data[i].fields.prix_maj.split("-")[2].split("T")[0] + "/" + data[i].fields.prix_maj.split("-")[1] + "/" + data[i].fields.prix_maj.split("-")[0],
                        prix: data[i].fields.prix_valeur,
                        nom: data[i].fields.prix_nom,
                    })
                    break;
                }
            }
            if(!isTrue){
                let ville = data[i].fields.ville;
                ville = ville.charAt(0).toUpperCase() + ville.slice(1); 

                array.push({
                    id: data[i].fields.id,
                    adresse: data[i].fields.adresse,
                    ville: ville,
                    essence:[
                        {
                            maj: data[i].fields.prix_maj.split("-")[2].split("T")[0] + "/" + data[i].fields.prix_maj.split("-")[1] + "/" + data[i].fields.prix_maj.split("-")[0],
                            prix: data[i].fields.prix_valeur,
                            nom: data[i].fields.prix_nom
                        }
                    ]
                })
            }
        }
        divResults.innerHTML =        
            `
            <div class="row">
            ${array.map(item=>
                `
            <div class="col-sm-4 col-md-2 col-10">
                <div class="cards" id="${item.id}">
                    <div class="card-body">
                        <h5 class="card-title m-1">${item.ville}</h5>
                        <ul>
                            ${item.essence.map(essence=>
                                `
                            <li>Adresse : ${item.adresse}</li>
                            <li>Type : ${essence.nom}</li>
                            <li>Prix : ${essence.prix}</li>
                            <li>Maj : ${essence.maj}</li>
                                `
                                )}
                        </ul>
                    </div>
                </div>
            </div>
        `
     ).join('\n')}
             </div>
            `
       toggleCard();

        
        /*let row = ""
        for(let i = 0; i < array.length; i++){
            
            if(i%3 == 0){l
                row = document.createElement('div');
                row.classList.add('row', 'justify-content-center');
                divResults.appendChild(row);
            }
            let col = document.createElement('div');
            col.classList.add('col-sm-4', 'col-md-2', "col-10");
            row.appendChild(col);

            let card = document.createElement('div');
            card.classList.add('cards');
            card.id = i;
            col.appendChild(card);

            let cardBody = document.createElement('div');
            cardBody.classList.add('card-body');
            card.appendChild(cardBody);

            let ville = array[i].ville.toLowerCase();
            ville = ville.charAt(0).toUpperCase() + ville.slice(1)
            let title = document.createElement('h5');
            title.classList.add('card-title');
            title.innerHTML = ville;
            cardBody.appendChild(title);

            let para = document.createElement('p');
            para.classList.add('card-text');
            cardBody.appendChild(para);

            let span = document.createElement('span');
            span.innerHTML = array[i].adresse;
            para.appendChild(span);





            for(let y = 0; y < array[i].essence.length; y++){
                let liste = document.createElement('ul');
                cardBody.appendChild(liste);

                let li1 = document.createElement('li');
                li1.innerHTML = "Type : " + array[i].essence[y].nom;
                liste.appendChild(li1);

                let li2 = document.createElement('li');
                li2.innerHTML = "Prix : " + array[i].essence[y].prix;
                liste.appendChild(li2);

                let li3 = document.createElement('li');
                li3.innerHTML = "Maj : " + array[i].essence[y].maj;
                liste.appendChild(li3);
            }

        }*/
     })
     .catch((err)=>{
         console.log(err);
     })
 }
 

export { validateForm };