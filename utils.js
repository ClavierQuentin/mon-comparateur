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

     
                    for(let i = 0; i < cardArray.length; i++){
                        if(cardArray[i].id !== card.id){
                            console.log("test2");
                            console.log(card.id);
                            console.log(card.children[0].children[1].children[0].innerHTML);
                            cardArray.push({
                                id: card.id,
                                ville: card.children[0].children[0].innerHTML,
                                essence: {
                                    adresse: card.children[0].children[1].children[0].innerHTML,
                                    nom: card.children[0].children[1].children[1].innerHTML,
                                    prix: card.children[0].children[1].children[2].innerHTML,
                                    maj: card.children[0].children[1].children[3].innerHTML
                                }
                            })
                            break
                        }
                        else{
                            console.log(cardArray[i].id);
                            cardArray.splice(i, 1);
                            break

                        }    
                    }
                
            
            console.log(cardArray);
        })
    )
}
export { parseRequestUrl, sortBySmaller , toggleCard};