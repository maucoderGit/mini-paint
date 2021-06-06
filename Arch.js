var cuadrado = document.getElementById("MiCuadradito");
var paper = cuadrado.getContext("2d");
var rect = cuadrado.getBoundingClientRect();
var x = 0, y= 0, dibujandoCanvas = false, color = "black", grosor = 1;

function MyColor(c){
    color = c;
}

function MyGrosor(g){
    grosor = g;
}

cuadrado.addEventListener("mousedown",function(e){
    x = e.clientX - rect.left;
    y = e.clientY - rect.top;
    dibujandoCanvas = true;
})
 
cuadrado.addEventListener("mousemove",function(e){
    if (dibujandoCanvas === true){
        dibujando(x,y, e.clientX - rect.left, e.clientY - rect.top);
        x = e.clientX - rect.left;            
        y = e.clientY - rect.top;
        }
});

cuadrado.addEventListener("mouseup",function(e){
    if (dibujandoCanvas === true){
        dibujando(x,y,e.clientX - rect.left, e.clientY - rect.top);
        x = 0;
        y = 0;
        dibujandoCanvas = false;
    }
})


function dibujando(xi,yi,xf,yf){
    paper.beginPath();
    paper.strokeStyle = color;
    paper.lineWidth= grosor;
    paper.moveTo(xi,yi);
    paper.lineTo(xf,yf);
    paper.stroke();
    paper.closePath();
}

dibujando (1,1,1,450)
dibujando (450,1,1,1)
dibujando (1,449,449,449)
dibujando (449,449,449,1)
dibujando (2,2,2,449)
dibujando (449,2,2,2)
dibujando (1,448,448,448)
dibujando (448,448,448,2)