
function toggleDarkTheme(){
    const bodyElement=document.getElementById('body');
    bodyElement.classList.remove('body-light');
    bodyElement.classList.add('body-dark');
    bodyElement.classList.remove(' top-navbar-light');
        bodyElement.classList.add('top-navbar-dark');
}
