const recupKeyEvent = (e) =>{
    e=e || window.event;
    if(e.keyCode == "13"){
       validateForm();
    }
}
/*
let cards = document.getElementsByClassName('cards');
console.log(cards);
Array.from(cards).forEach(card=>
    card.addEventListener('click', ()=>{
        card.classList.toggle('active-cards');
        console.log(card.id);
    })
)*/