let navbar = document.querySelector('.header .navbar')

document.querySelector('#menu-btn').onclick = () => {
    navbar.checklist.toggle('active');

}
window.onscroll = () => {
    navbar.checklist.remove('active')
}