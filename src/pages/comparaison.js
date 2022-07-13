import { deleteCard } from "../../utils.js";

const comparaisonPage = {
    generate : () => {
        let items = "";
        const main = document.querySelector('main');
        localStorage.getItem('liste') ? items = JSON.parse(localStorage.getItem('liste')) : items = [];
        main.innerHTML = 
        `
            <div class="m-2">
                <h3>
                    Vos séléctions :
                </h3>
            </div>
            <section>
            <div class="row gx-0">
            ${items.map(item=>
                `
            <div class="col-sm-4 col-md-2 col-10">
                <div class="cards" id="${item.id}">
                <button id="${item.id}" class="btn btn-danger button">X</button>
                    <div class="card-body p-2">
                        <h5 class="card-title m-1">${item.ville}</h5>
                        <ul>
                            ${item.essence.map(essence=>
                                `
                            <li>${item.adresse}</li>
                            <li>${essence.nom}</li>
                            <li>${essence.prix}</li>
                            <li>${essence.maj}</li>
                                `
                                )}
                        </ul>
                    </div>
                </div>
            </div>
        `
     ).join('\n')}
             </div>
            </section>
        `
        deleteCard();
    }
    
}
export default comparaisonPage;