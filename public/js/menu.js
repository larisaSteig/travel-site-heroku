const toggle =document.querySelector('button')
const menu = document.querySelector('nav ul')
  
toggle.addEventListener('click', function(){
menu.classList.toggle('visible')
})
