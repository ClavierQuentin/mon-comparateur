const comparaisonPage = {
    generate : () => {
        const main = document.querySelector('main');
        main.innerHTML = 
        `
            <div>
                <h3>
                    Vos séléctions :
                </h3>
            </div>
            <section>
            </section>
        `
    }
}
export default comparaisonPage;