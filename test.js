const rightButton = document.querySelector('.right-button')
const leftButton = document.querySelector('.left-button')
const list = document.querySelector('.list')
let width = screen.width

function updateScreen(){

    if(width >= 1500){
        leftButton.style.display = "none"
        rightButton.style.display = "none"
    } else {
        leftButton.style.display = "block"
        rightButton.style.display = "block"
    }

}

rightButton.addEventListener('click', function(){
    list.scrollBy({
        left: 200,
        behavior: "smooth"
    })
})

leftButton.addEventListener('click', function(){
    list.scrollBy({
        left: -200,
        behavior: "smooth"
    })
})

updateScreen();


list.addEventListener("scroll", updateScreen);
window.addEventListener("resize", updateScreen)
  