// using this file is optional
// you can also load the code snippets in using your browser's console
const main = document.getElementById('main');

main.addEventListener('click',event => alert('I was clicked!'));

const input = document.querySelector('input');

input.addEventListener('keydown', e => {
    if (e.which === 71){
        return e.preventDefault()
    }else{
        console.log(e.which)
    }
});

let divs = document.querySelectorAll('div');


// Why must it be this way rather than using the arrow function? 
function  capture(e){
    console.log(this.firstChild.nodeValue.trim() + 'captured');
} 

for (let i = 0; i < divs.length; i++){
    divs[i].addEventListener('click',capture, true);
} 