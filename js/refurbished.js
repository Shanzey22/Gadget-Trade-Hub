function cart()
{
    alert('Your order is added to cart successfully')
}
function toggleDarkTheme()
{
    const bodyElement=document.getElementById('body');
    bodyElement.classList.remove('body-light');
    bodyElement.classList.add('body-dark');

}
function toggleLightTheme()
{
    const bodyElement=document.getElementById('body');
    bodyElement.classList.add('body-light');
    bodyElement.classList.remove('body-dark');

}