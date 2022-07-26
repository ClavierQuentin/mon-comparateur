import { generateDep } from "../script/generateDep.js";
import { validateForm } from "../script/validateForm.js";

const formPage =  {
    generate : () => {
        const main = document.querySelector('main');
        let selectDepartements = document.getElementById('départements');
        let selectVille = document.getElementById('ville');
    
    
        let optionDepartement = document.getElementsByClassName('otpion-departement');
    
        let divForm = document.getElementById('form');
    
        let nomVille = "";
        let nomDepartement = "";
    
        let essences = document.getElementsByClassName('essence');
    
        main.innerHTML = 
        `
        <div id="form">
        <div class="selects">
            <div class="m-2">
                <label for="liste-departements">Sélectionner un département</label>
                <select name="departements" id="départements"></select>
            </div>
            <div class="m-2" id="divVille">
                <label for="ville">Choisir une ville</label>
                <select name="ville" id="ville"></select>
            </div>
            </div>
        <div class="m-2">
            <label for="essence">Selectionnez un type d'essence : </label><br>
            <input type="radio" name="essence" id="SP98" value="SP98" class="form-check-input essence"><label class="form-check-label" for="SP98">SP98</label> <br>
            <input type="radio" name="essence" id="SP95" value="SP95" class="form-check-input essence"><label for="SP95">SP95</label> <br>
            <input type="radio" name="essence" id="gazole" value="Gazole" class="form-check-input essence"><label for="gazole">Gazole</label> <br>
            <input type="radio" name="essence" id="GPLc" value="GPLc" class="form-check-input essence"><label for="GPLc">GPLc</label> <br>
            <input type="radio" name="essence" id="E10" value="E10" class="form-check-input essence"><label for="E10">E10</label> <br>
            <input type="radio" name="essence" id="E85" value="E85" class="form-check-input essence"><label for="E85">E85</label> <br>
        </div>
        <div class="m-2">
            <button id="btnValidate" class="btn btn-success">Valider</button>
        </div>
        <form id="demo-form" action="?" method="POST">
      <button class="g-recaptcha" data-sitekey="6LepuxohAAAAAChJ_a-bx9KO4nqIfEw8iCt5Jk3y" data-callback="onSubmit">Submit</button>
      <br/>
    </form>

    </div>
    <section>
        <div id="results">
            <h2>Résultats</h2>
            <div class="container-fluid" id="container"></div>
        </div>
    </section>
        `
        generateDep();
        let btnValidate = document.getElementById('btnValidate');

        btnValidate.addEventListener('click', validateForm);

    }
}

export default formPage;