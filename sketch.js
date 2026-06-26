//variables

//activacion de camra

let camara;

//cambios de filtro de camara

let filtro = 0;

//coordenadas para el boton que toma la foto
let xFoto = 436;
let yFoto = 660;
let radio = 50;

//coordenadas boton para cambiar filtros

let xFiltro = 502;
let yFiltro = 573;
let rFiltro = 20;

//tamaño de camara y posicionamiento

let camX = 90;
let camY = 112;
let camW = 420;
let camH = 300;

//Pantalla de inicio

let estado = 0;

let creditos = 5;


function setup() {
  createCanvas(600, 750);

  camara = createCapture(VIDEO,{flipped:true});
  
  camara.size(camW,camH);
  
  camara.hide();

}

function draw() {

if (estado == 0) {

    pantallaInicio();

  }

  if (estado == 1){

  
  background(37,173,159);
  
  noStroke(true);

    
    //cruceta
    
    push();
    
     fill(253,208,79);
     quad(182, 471, 215, 471, 215, 572, 182, 572);
     quad(145, 510, 247, 510, 247, 536, 145, 536);
     
    pop();

    //ranura
    
    push();
     fill(1,80,55);
     quad(132,437,366,437,366,458,132,458);
    
    pop();

    //triangulo
    
    push();

    fill(68,193,223);
    triangle(360,560,393,488,426,560);

    pop();


    //circulo verde
    
    push();
    
    fill(111,187,99);
    ellipse(502,573,40,40);

    pop();

    //circulo rojo

    push();
    
    fill(220,59,69);
    ellipse(436,660,100,100);


    //circulo camara
    push();

    fill(0);
    ellipse(296,67,22,22);

    pop();

    //botones pausa/select

    push();

    fill(0,73,123);
    rect(120,647,78,24);
    rect(210,647,78,24);

    pop();
    
    //camara 

    aplicarFiltro();
    
     
     text('📷', xFoto, yFoto);
     text('🎨', xFiltro, yFiltro);
     textAlign(CENTER, CENTER);
     textSize(25);

    //mostrar créditos
    push();
    
    fill(255);
    textSize(20);
    textAlign(LEFT, TOP);
    text("Créditos: " + creditos, 20, 20);

    pop();
  }

  if (estado == 2){

    pantallaFinal();
  }
 }
  
  

//EVENTOS


function mousePressed(){

  if (dist(mouseX, mouseY, xFoto, yFoto) < radio){
    tomarFoto();
    }
     if (dist(mouseX, mouseY, xFiltro, yFiltro) < rFiltro){
    cambiarFiltro();
    }
}

function keyPressed(){
  if (keyCode == ENTER && estado == 0){
    estado = 1;
  }
}

//FUNCIONES PROPIAS

  //Función para imagenes

function preload(){
  foto = loadImage ("makaku.png")
  foto2 = loadImage ("makakutriste.png");
}

  //Pantalla inicio

function pantallaInicio() {

  background(0);

  image(foto,190,488, 439/2, 427/2);

  //image.size(50,50)
  
  fill(255);

  textAlign(CENTER, CENTER);

  textSize(60);
  text("PHOTO BOOTH", width/2, 180);

  textSize(20);
  text("Presiona ENTER para comenzar", width/2, 400);

}

   //Pantalla final (sin créditos)

function pantallaFinal(){
  
  background(0);

  image(foto2,190,300, 439/2, 427/2)
  
  fill(255);

  textAlign(CENTER,CENTER);

  textSize(20);

  text("SE ACABARON LOS CRÉDITOS :C", width/2, 250);

  
}

//función para guardar la foto

function tomarFoto(){
  
  let foto = get(camX, camY, camW, camH);
  foto.save("Foto", "png");

  creditos--;

  if (creditos <= 0){

    estado = 2;
  }
}

//Cambiar el filtro al hacer click en el bóton

function cambiarFiltro(){

  filtro++;

  if(filtro > 4){
    filtro = 0;
  }

}

  //Aplicar los filtros en la camara
  
function aplicarFiltro(){

  push();

  if(filtro == 0){

    image(camara, camX, camY, camW, camH);
  }

  if(filtro == 1){

    tint(255,220,255);

    image(camara, camX, camY, camW, camH);
  }

  if (filtro == 2){

    tint(180,220,255);

    image(camara, camX, camY, camW, camH);
  }

  if(filtro == 3){

    blendMode(ADD);

    image(camara, camX, camY, camW, camH);

    blendMode(BLEND);
    
  }

  if (filtro == 4){

    tint(
         random(180,255),
         random(180,255),
         random(180,255)
        );

    image(
          camara,
          camX, 
          camY,
          camW,
          camH
         );
    
  }
  
  pop();
  
}
  
