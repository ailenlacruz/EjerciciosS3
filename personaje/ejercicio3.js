/*3) Crea un personaje el cual se mueva por una pagina, este debe tener limites (No puede desbordarse), ademas deberá tener 2 obstáculos.*/

let personaje = document.getElementById('personaje');
let objeto1 = document.getElementById('objeto1');
let objeto2 = document.getElementById('objeto2');


let y = 0;
let x = 0;

function click(evento){
    if(evento.key == 'a'){
        x -= 10 
        personaje.style.left = x + 'px'
        personaje.src = 'imgP/p-left.png'
    }
    if(evento.key == 'd'){
        x += 10 
        personaje.style.left = x + 'px' 
        personaje.src = 'imgP/p-right.png'
    }
    if(evento.key == 'w'){
        y -= 10
        personaje.style.top = y + 'px'
    }
    if(evento.key == 's'){
        y += 10
        personaje.style.top = y + 'px'
    }
    

    if(x <= -12){
        personaje.style.left = '-10px'
        x = -10;}

    if(x >= 1023){
        personaje.style.left = '1022px'
        x = 1022;
    }
    if(y <= 0){
        personaje.style.top = '0px'
        y = 0;
    }
    if(y >= 419){
        personaje.style.top = '419px'
        y = 419;
    }

    if(x == 350 && y >= 40 && y <= 160){
        x -= 10;
        personaje.style.left = x + 'px'
    }else if(x >= 370 && x <= 430 && y == 40){
        y -= 10;
        personaje.style.top = y + 'px'
    }else if(x == 450 && y >= 40 && y <= 160){
        x += 10;
        personaje.style.left = x + 'px'
    }else if(x >= 360 && x <= 440 && y == 160){
        y += 10;
        personaje.style.top = y + 'px'
    }


    if(x == 750 && y >= 240 && y <= 370){
        x -= 10;
        personaje.style.left = x + 'px'
    }else if(x >= 750 && x <= 850 && y == 240){
        y -= 10;
        personaje.style.top = y + 'px'
    }else if(x == 850 && y >= 240 && y <= 350){
        x += 10;
        personaje.style.left = x + 'px'
    }else if(x >= 760 && x <= 840 && y == 360){
        y += 10;
        personaje.style.top = y + 'px'
    }


}

window.onkeydown = click;

console.log(objeto2)

