const hamburger = document.getElementById('hamburger');
const list = document.getElementById('list');
const bars = document.getElementById('bars');
hamburger.addEventListener('click',()=>{
    list.classList.toggle('navlist-active');
    bars.classList.toggle('fa-xmark')
})