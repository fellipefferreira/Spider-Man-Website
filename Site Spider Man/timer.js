alert("Parabéns !!!");


let iniciar = document.querySelector('.iniciar');
let pausar = document.querySelector('.pausar');
let tempo =document.querySelector('.tempo');


iniciar.addEventListener('click', iniciarTempo);
pausar.addEventListener('click', pausarTempo);
pausar.addEventListener('dblclick', resetarTempo);


let i= 0;
let timer;




function iniciarTempo(){
    timer = setInterval(()=>{
        tempo.innerText = i++;
    },100);
    iniciar.setAttribute('disabled', '');
}

function pausarTempo(){
    clearInterval(timer);
    iniciar.removeAttribute('disabled');
}
function resetarTempo(){
    tempo.innerText =0;
    i=0;
}