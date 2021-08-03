let counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true
    counter ++;
    if (counter > 4){
        counter = 1
    }
}, 5000);


const bar = document.querySelector('.bar');
const mainNav = document.querySelector('.main-nav');

bar.addEventListener ('click', () => {
    mainNav.classList.toggle("main-nav-bar");
})