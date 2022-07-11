
const homePage = {
    generate : () => {
        const main = document.querySelector('main');
        main.innerHTML = 
        `
            <section>
                <div>
                    <h1>Bienvenue sur mon API de comparaison de tarifs de stations services</h1>
                </div>
            </section>
        `
    }
}
export default homePage;