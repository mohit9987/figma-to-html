//alert('hi');
let popup1= document.querySelectorAll('.popup1');
for(let i=0; i<popup1.length;i++){
    popup1[i].addEventListener('click', fnAlert)
}

function fnAlert(){
    alert('hi hi');
}

