
const nom =  document.querySelector('.container_nom > input[type="text"]')
const password = document.querySelector('.container_password > input[type="password"]');
const connexion = document.querySelector('.connexion');
let data_nom = null;
let data_password = null;
let data_connexion = [];
const socket = io()
// les evenements sur les inputs sont de type input  
const Nom = (value)=>{
    const span = document.querySelector('.erreur_span_1 > span');
    if(value.length == 0){
       span.textContent = '';
       data_connexion.data_nom = null;
    }
    else if(value.length < 3){
        span.classList.add('span_1');
        span.textContent = 'Entrez plus de 2 caractère.';
    }else if(!value.match(/^[a-zA-Z_.-]*$/)){
        span.classList.add('span_1');
        span.textContent = 'Le nom est invalide.';
    }
    else{ 
        span.textContent = '';
        data_connexion.data_nom = null;
    }
    if(value.length >= 3 && value.match(/^[a-zA-Z_.-]*$/)){
        data_connexion.data_nom = value;
    }
}
const Password = (value)=>{
    const span_2 = document.querySelector('.erreur_span_2 > span');
    if(value.length == 0){
       span_2.textContent = '';
       data_connexion.data_password = null;
   }
   else if(!value.match(/^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\w]){1,})(?!.*\s).{8,}$/)){
        span_2.classList.add('span_2');
        span_2.innerHTML = 'Minimum 8 caractères avec <br>une majuscule et un chiffre';
        data_connexion.data_password = null;
    }
    else {
        span_2.textContent = '';
        data_connexion.data_password = null;
    }
    if(value.length > 0 && value.match(/^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\w]){1,})(?!.*\s).{8,}$/)){
        data_connexion.data_password = value;
    }
};
document.body.addEventListener('input', (e) => {
    switch(e.target.id){
        case 'nom':
            Nom(e.target.value);
            break;
        case 'password':
            Password(e.target.value);
            break;
        default: null;
        break;
    }
})
connexion.addEventListener('click', (e)=>{
    const span = document.querySelector('.erreur_span_1 > span');
    const span_2 = document.querySelector('.erreur_span_2 > span');
    if(data_connexion.data_nom == null){
        e.preventDefault();
        span.textContent = 'Entrez votre nom svp.';
    }else if(data_connexion.data_password == null){
        e.preventDefault();
        span_2.classList.add('span_2');
        span_2.innerHTML = 'Entrez votre mot de passe.';
    }else{
        
    }
})
const formulaire_nom = document.querySelectorAll('.Inputs');
let NOM = null;
let EMAIL = null;
let PASSWORD = null;
let CONFIRME = null;
let DATA = [];
const Ecrit = (value) =>{
    const afficheur_nom = document.querySelector('.input_text > span');
    if(value.length == 0){ 
        afficheur_nom.textContent = '';
        DATA.NOM = null;
    }else if(value.length <= 2 ){
        afficheur_nom.textContent = 'Entrez plus de 2 caractères.';
    }else if(!value.match(/^[a-zA-Z_.-]*$/)){
        afficheur_nom.textContent = "Le nom est invalide.";
    }else{
        afficheur_nom.textContent = "";
    }
    if(value.length >= 3 && value.match(/^[a-zA-Z_.-]*$/)){
        DATA.NOM = value;
    }
}
const Email = (value) =>{
    const afficheur_email = document.querySelector('.input_email > span');
    if(value.length == 0){
        afficheur_email.textContent = '';
        DATA.EMAIL = null;
    }
    else if(!value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,3}$/i)){
        afficheur_email.textContent = "le mail n'est pas valide.";
        DATA.EMAIL = null;
    }
    else{
        afficheur_email.textContent = '';
    }
    if(value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,3}$/i)){
       DATA.EMAIL = value;
   }
}
const Password_2 = (value) =>{
    const afficheur_password_2 = document.querySelector('.input_password > span');
    const test = document.querySelector('.progresse');
    const test_2 = document.querySelector('.plusprogresse');
    if(value.length == 0){
        afficheur_password_2.textContent = '';
        DATA.PASSWORD = null;
    }else if(!value.match(/^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\w]){1,})(?!.*\s).{8,}$/)){
        afficheur_password_2.textContent = 'Minumum 8 caractères, une majuscule et un chiffre.';
        DATA.PASSWORD = null;
    }else{
        afficheur_password_2.textContent = '';
        DATA.PASSWORD = null;
    }
    if(value.length > 0 && value.match(/^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\w]){1,})(?!.*\s).{8,}$/)){
        DATA.PASSWORD = value;
    } 
    if(value.length >= 8 && value.match(/^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\w]){1,})(?!.*\s).{8,}$/)){
        test.style.visibility = 'visible';
    }else{
        test.style.visibility = 'hidden';
    }
    if(value.length >= 12 && value.match(/^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\w]){1,})(?!.*\s).{8,}$/)){
        test_2.style.visibility = 'visible';
    }else{
        test_2.style.visibility = 'hidden';
    }
}
const Confirme = (value) =>{
    const afficheur_confirme = document.querySelector('.input_confirme > span');
    if(value == 0){
        afficheur_confirme.textContent = '';
        DATA.CONFIRME = null;

    }
   else if(value != DATA.PASSWORD){
       afficheur_confirme.style.color = 'red';
       afficheur_confirme.textContent = 'Mot de passe incorrect.';
       DATA.CONFIRME = null;
   }else{
        afficheur_confirme.style.color = 'teal';
        afficheur_confirme.textContent = 'Mot de passe correct.';
        DATA.CONFIRME = value;
   }
}
formulaire_nom.forEach((input)=>{
    input.addEventListener('input',(e)=>{
        switch(e.target.id){
            case 'ecrit':
                Ecrit(e.target.value);
                break;
            case 'email':
                Email(e.target.value);
                break;
            case 'password_2':
                Password_2(e.target.value);
                break;
            case 'confirme':
                Confirme(e.target.value);
                break;
            default: null;  
        } 

    })
})
bouton_valider.addEventListener('click',(e)=>{
    const afficheur_confirme = document.querySelector('.input_confirme > span');
    const afficheur_password_2 = document.querySelector('.input_password > span');
    const afficheur_email = document.querySelector('.input_email > span');
    const afficheur_nom = document.querySelector('.input_text > span');
    if(DATA.NOM == null){
        afficheur_nom.textContent = 'Entrez un nom valide.';
        e.preventDefault();
    }else{
    }
    if(DATA.EMAIL == null){
        afficheur_email.textContent = 'Entrez un email';
        e.preventDefault();
    }else{
    }
    if(DATA.PASSWORD == null){
        afficheur_password_2.textContent = 'Entrez un mot de passe.';
        e.preventDefault();
    }else{
    }
    if(DATA.CONFIRME == null){
        afficheur_confirme.textContent = 'Confirmez le mot de passe.';
        e.preventDefault();
    }else{
    }
    if(accepter.checked){
        DATA.CGV = accepter.checked;
    }else{
        alert('vous devez accepter les CGV.');
        e.preventDefault();
    }
})
// ------------------------------------------------------------------------------------------- fin de la page de couverture -------------------------------------------------------------------------------------------


    const conteneur = document.createElement('div');
    document.body.appendChild(conteneur);
    let tab = ["L'amour est la meilleur chose qui puisse arriver  a un homme.","Il faut toujours recherché le bonheur ,  une fois trouvé tu sera heureux."];
    let mot = 0;
    let lettre = 0;
    const affichages = ()=>{
        const ecriture = document.createElement('span');
        conteneur.appendChild(ecriture);
        ecriture.classList.add('voir');
        ecriture.textContent = tab[mot][lettre];
        setTimeout(()=> ecriture.remove(), 4800);
    }
    const logique = ()=>{
        setTimeout(()=>{
            if(mot == tab.length){
                mot = 0;
                lettre = 0;
                logique();
            }else if(lettre < tab[mot].length){
                affichages();
                lettre++;
                logique();
            }else{
                mot++;
                lettre = 0;
                setTimeout(()=> logique(), 4800);
            }
        }, 40);
    }
    logique();
// pour la responsive //
// bouton de connexion
const Connexion = document.createElement('h4')
const NavContainer = document.querySelector('.navContainer')
Connexion.innerHTML = "Connexion"
Connexion.classList.add('Connecte')
NavContainer.appendChild(Connexion)

Connexion.addEventListener('click',()=>{
    console.log('oui il a clicker !!!')
})










// bouton de connexion
// pour la responsive //
