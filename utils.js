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
    console.log(cards);
    Array.from(cards).forEach(card=>
        card.addEventListener('click', ()=>{
            card.classList.toggle('active-cards');
            console.log(card.id);
        })
    )
}
export { parseRequestUrl, sortBySmaller , toggleCard};