let paragraph = document.querySelector('.mess-with-me')
paragraph.style.font = '40px'
paragraph.style.backgroundColor = 'green'
paragraph.addEventListener('click', ()=>{
    paragraph.style.color = 'orange'
})


let image2 = document.querySelector('#hide-me')
image2.style.display = 'none'

let image = document.querySelector('#triceratops')
image.style.width = '324px'
image.addEventListener('click', ()=>{
    image.style.border = 'red 2px solid'
})

let image3 = document.querySelector('#feathers')
image3.addEventListener('click', ()=>{
    image3.style.opacity = '50%'
})

let button2 = document.querySelector('#row')
let button = document.querySelector('#toggle')
toggle.addEventListener('click', ()=>{
    button2.style.backgroundColor = "purple"
})

function red(){
	button.style.backgroundColor = "red";
}
function white(){
	button.style.backgroundColor = "white";
  
};


button.addEventListener("click", red);
button.addEventListener("click", white);

//let button = document.querySelector('#toggle', '#row')
//button.addEventListener('click', ()=>{
  // button.style.backgroundColor = 'purple'
//})


   

let image4 = document.querySelector('#biggify')
image4.addEventListener('mouseover', ()=>{
    image4.style.width = '200px'
})
image4.addEventListener('mouseout', ()=>{
    image4.style.width = '162px'
})