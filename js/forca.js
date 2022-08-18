var tela = document.querySelector("canvas");
var pincel = tela.getContext("2d");
pincel.lineWidth = 10;

pincel.strokeStyle = "darkblue";
desenhaLinha(10,400,310,400);
desenhaLinha(80,400,80,50);
desenhaLinha(80,50,260,50);
desenhaLinha(260,50,260,100);


function desenhaLinha(x,y,x1,y1){
    pincel.beginPath();
    pincel.moveTo(x, y);
    pincel.lineTo(x1, y1);
    pincel.stroke();
}

function desenhaCirculo(x, y, raio) {
    pincel.beginPath();
    pincel.arc(x, y, raio, 0, 2*3.14);
    pincel.stroke();
}
function desenhaBoca(x, y, raio) {
    pincel.beginPath();
    pincel.arc(x, y, raio, 5, Math.PI * 2,false);
    pincel.stroke();
}


function desenhaForca(){
    switch (letrasErradas.length) {
        case 0:
            reiniciaCanvas();
            break;
        case 1:
            desenhaCirculo(260,132,32);
            break;
        case 2:
            desenhaLinha(260,164,260,300);
            break;
        case 3:
            desenhaLinha(260,164,225,228);
            break;
        case 4:
            desenhaLinha(260,164,295,228);
            break;
        case 5:
            desenhaLinha(260,300,225,364);
            break;
        case 6:
            desenhaLinha(260,300,295,364);
            setTimeout(function(){
                
                alert(`Você perdeu, a palavra correta era ${palavra}`)
            },500)
            
            break;
        default:

            break;
    }
}

function reiniciaCanvas(){
    pincel.clearRect(0,0,350,400);
    desenhaLinha(10,400,310,400);
    desenhaLinha(80,400,80,50);
    desenhaLinha(80,50,260,50);
    desenhaLinha(260,50,260,100);
}