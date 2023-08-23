
function toggleDarkTheme(){
    const bodyElement=document.getElementById('body');
    bodyElement.classList.remove('body-light');
    bodyElement.classList.add('body-dark');
    bodyElement.classList.remove(' top-navbar-light');
        bodyElement.classList.add('top-navbar-dark');
}
function toggleLightTheme(){
    const bodyElement=document.getElementById('body');
    bodyElement.classList.remove('body-dark');
    bodyElement.classList.add('body-light');
    bodyElement.classList.remove(' top-navbar-dark');
        bodyElement.classList.add('top-navbar-light');
}