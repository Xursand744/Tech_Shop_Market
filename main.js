const bar = document.getElementById('bar')
const nav = document.getElementById('navbar')
const cloce = document.getElementById('cloce')

if(bar){
bar.addEventListener('click', () =>{
nav.classList.add('active')
})
}


if(cloce){
cloce.addEventListener('click', () =>{
nav.classList.remove('active')
})
}


// -==-=-=- sproduct-=-==-=-

var mainImg = document.getElementById('MainImg')
var smalling = document.getElementsByClassName('small__img')


smalling[0].onclick = function(){
    mainImg.src = smalling[0].src
}
smalling[1].onclick = function(){
    mainImg.src = smalling[1].src
}
smalling[2].onclick = function(){
    mainImg.src = smalling[2].src
}
smalling[3].onclick = function(){
    mainImg.src = smalling[3].src
}



// var pro = document.querySelector('.pro')

// pro = onclick ="window.location.href='sproduct.html'"



