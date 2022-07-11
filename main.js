import formPage from "./src/pages/form.js";
import homePage from "./src/pages/home.js";
import comparaisonPage from "./src/pages/comparaison.js";

import { parseRequestUrl } from "./utils.js";

const routes = {
    "/" : homePage,
    "/form" : formPage,
    "/comparaison": comparaisonPage
}

const router = () => {
    const request = parseRequestUrl();
    const parseUrl = (request.page? `/${request.page}` : '/') + (request.destination? `/${request.destination}` : "") + (request.id? `/id` : "");
    const screen = routes[parseUrl]? routes[parseUrl] : "";
    screen.generate();
}

window.addEventListener('load', () =>{
    router();
});
window.addEventListener('hashchange', () =>{
    router();
});