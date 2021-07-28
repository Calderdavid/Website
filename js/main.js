//Pages
const homePage = document.getElementById('homePage');
const collectionPage = document.getElementById('collectionPage');
const aboutPage = document.getElementById('aboutPage');
const contactPage = document.getElementById('contactPage');

//buttons
const readMore = document.getElementById('but-des');
const interiorLogo = document.getElementById('btn');
const textSection = document.getElementById('text-section');

//inputs
// const inputName = document.getElementById('nombre');
const inputEmail = document.getElementById('email');
const issue = document.getElementById('asunto');
const message = document.getElementById('mensaje');



//Components
homePage.onclick = (e) => {
    window.location.href = 'http://127.0.0.7:5500/index.html'
}

collectionPage.onclick = (e) => {
    window.location.href = "http://127.0.0.7:5500/collectionPage.html"
}

aboutPage.onclick = (e) => {
    window.location.href = "http://127.0.0.7:5500/aboutPage.html"
}

contactPage.onclick = (e) => {
    window.location.href = "http://127.0.0.7:5500/contactPage.html"
}

readMore.onclick = (e) => {
    let newP = document.createElement('p');
    newP.innerHTML = "Discover modern interior design inspiration from these stylish forward-thinkers";
    
    let remove = textSection.removeChild(readMore);
    textSection.appendChild(newP);
}

interiorLogo.onclick = (e) => {
    location.reload();
}

function validateForm(e) {
    e.preventDefault();
    let inputName = document.getElementById('nombre').value;
    let inputLastname = document.getElementById('apellidos');

    if (inputName.length == 0 || inputLastname == 0) {
        alert('Was not entered any input name or input lastname, Please enter both');
        return;
    }

    this.submit();

}


document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('form').addEventListener('submit', validateForm);
})







