//ouvrir burger
function openMenu() {
    document.getElementById("bur").style.height = '100%'
    
}
//fermer burger
function closeMenu() {
    document.getElementById("bur").style.height = '0%'
    
}

let imgbx = document.querySelectorAll('.imgbx')
imgbx.forEach(popup => popup.addEventListener('click', () => 
{
    popup.classList.toggle('active')
}))





function toggle(){
    var blur = document.getElementById('blur')
    blur.classList.toggle('active');
    var popup = document.getElementById('popup')
    popup.classList.toggle('active');
    
}


function togglee(){
    var blurr = document.getElementById('blur')
    blurr.classList.toggle('active');
    var popupp = document.getElementById('popupp')
    popupp.classList.toggle('active');
}

document.addEventListener("mousemove", function(e){
    const bg = document.querySelector('.bg');
    const yu = document.querySelector('.yu');
    const content = document.querySelector('.content');

    bg.style.width = 100 + e.pageX/100 + '%';
    bg.style.height = 100 + e.pageX/100 + '%';

    yu.style.right = 100 + e.pageX/2 + 'px';

    content.style.left = 100 + e.pageX/3 + 'px';
})

$(document).ready(function(){
    $('.toggle').click(function() {
      $('.sidebar-contact').toggleClass('active');
      $('.toggle').toggleClass('active');
      
    })
    
  });

let dayNight = document.querySelector('.dayNight')
let menuToggle = document.querySelector('.menuToggle')
let body = document.querySelector('body')
let navigation = document.querySelector('.navigation')

dayNight.onclick = function(){
    body.classList.toggle('dark')
    dayNight.classList.toggle('active')
}

menuToggle.onclick = function(){
    menuToggle.classList.toggle('active')
    navigation.classList.toggle('active')
}