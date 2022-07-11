const comparaisonPage = {
    generate : () => {
        let items = "";
        const main = document.querySelector('main');
        localStorage.getItem('liste') ? items = JSON.parse(localStorage.getItem('liste')) : items = [];
        console.log(items);
        main.innerHTML = 
        `
            <div>
                <h3>
                    Vos séléctions :
                </h3>
            </div>
            <section>
            <div class="row">
            ${items.map(item=>
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
            </section>
        `
    }
}
export default comparaisonPage;