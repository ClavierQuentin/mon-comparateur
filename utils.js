import comparaisonPage from "./src/pages/comparaison.js";


const parseRequestUrl = () => {
    const url = document.location.hash.toLowerCase();
    const request = url.split("/");
    return{
        page: request[1],
        destination: request[2],
        id: request[3]
    } ;
}


const sortBySmaller = (array) =>{
    array.sort(function (a,b){        
        if(a < b){            
            return -1        
        }else if(a == b){            
            return 0        
        } else {            
            return 1        
        }    
    });
};

const toggleCard = () => {
    let cards = document.getElementsByClassName('cards');
    let cardArray = [];
    Array.from(cards).forEach(card=>
        card.addEventListener('click', ()=>{
            card.classList.toggle('active-cards');
            localStorage.getItem('liste') ? cardArray = JSON.parse(localStorage.getItem('liste')) : cardArray = [];

            const exist = cardArray.find(x => x.id == card.id);
            if(exist){
                for(let i = 0; i < cardArray.length; i++){
                    if(cardArray[i].id == card.id){
                        cardArray.splice(i,1);
                    }
                }
            }
            else{
                cardArray = [...cardArray, {
                    id: card.id, 
                    ville: card.children[0].children[0].innerHTML,
                    adresse:  card.children[0].children[1].children[0].innerHTML,
                    essence: [
                        {
                        nom: card.children[0].children[1].children[1].innerHTML,
                        prix: card.children[0].children[1].children[2].innerHTML,
                        maj: card.children[0].children[1].children[3].innerHTML
                        }
                        ]
                     }
                ];
            }
            
            localStorage.setItem('liste', JSON.stringify(cardArray));
                     
            
        })
    )
}

const deleteCard = () =>{
    let btn = document.getElementsByClassName('button');
    let cardArray = [];
    Array.from(btn).forEach(btn=>
        btn.addEventListener('click', () => {
            localStorage.getItem('liste') ? cardArray = JSON.parse(localStorage.getItem('liste')) : cardArray = [];
            const exist = cardArray.find(x => x.id == btn.id);
            if(exist){
                for(let i = 0; i < cardArray.length; i++){
                    if(cardArray[i].id == btn.id){
                        cardArray.splice(i,1);
                    }
                }
            }
            localStorage.setItem('liste', JSON.stringify(cardArray));
            comparaisonPage.generate();
        })
    )
}
export { parseRequestUrl, sortBySmaller , toggleCard, deleteCard};