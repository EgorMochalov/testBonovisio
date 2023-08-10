window.addEventListener("load", function() {
    let button = this.document.querySelector('.burger');
    let menu = this.document.querySelector('.drop-menu');
    let exit = this.document.querySelector('.exit');
    button.addEventListener('click',function(){
        menu.classList.add('active')
    })
    exit.addEventListener('click',function(){
        menu.classList.remove('active')
    })
}, false); 