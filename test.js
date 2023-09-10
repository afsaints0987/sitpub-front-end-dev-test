const rightButton = document.querySelector('.right-button')
const leftButton = document.querySelector('.left-button')
const list = document.querySelector('.list')
let width = screen.width

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

  