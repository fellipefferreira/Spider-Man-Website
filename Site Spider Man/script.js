alert("Bem-Vindo");


let imagens =['img/spiderman3.jpg','img/spiderman5.jpg','img/goblinfight.jpg'];
let Index =0;
let time =3000;



function slideShow(){
   
    document.getElementById('img-vilão').src =imagens[Index];
    Index++;
    if(Index == imagens.length){
        Index = 0;
    }
    setTimeout('slideShow()',time)
}

slideShow();


function validar(){
    let usuario = document.getElementById('idUser').value;
    let senha = document.getElementById('idSenha').value;

    if(usuario ==="Admin" && senha ==="12345")
    {
        window.open('dashboard.html');
    }else{
    alert("Usuário ou senha inválidos")
    }
}

let data = new Date();
document.write(data)