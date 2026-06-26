//variables

//activacion de camra

let camara;

//cambios de filtro de camara

let filtro = 0;

//coordenadas para el boton que toma la foto
let xFoto = 300;
let yFoto = 550;
let radio = 30;

//coordenadas boton para cambiar filtros

let xFiltro = 300;
let yFiltro = 630;
let rFiltro = 30;

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

  
  background(220,0,0);
  
  strokeWeight(0.1)
 
  //loop para franjas blancas
   for (let x = 20; x < width; x += 40) {
     
    rect(x, 0, 20, height);
     
   }

  //camara 

    aplicarFiltro();
    
  //botones
  
     push();
     
     fill(0);
     
     circle(xFoto, yFoto, radio * 2);

     circle(xFiltro, yFiltro, rFiltro * 2);

     rect(20,20,100,20);

     pop();
     
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

function preload(){
  foto = loadImage ("makaku.png")
  foto2 = loadImage ("makakutriste.png");
}

function pantallaInicio() {

  background(10);

  image(foto,190,488, 439/2, 427/2);

  //image.size(50,50)
  
  fill(255);

  textAlign(CENTER, CENTER);

  textSize(60);
  text("PHOTO BOOTH", width/2, 180);

  textSize(20);
  text("Presiona ENTER para comenzar", width/2, 400);

}

function pantallaFinal(){
  
  background(10);

  image(foto2,190,300, 439/2, 427/2)
  
  fill(255);

  textAlign(CENTER,CENTER);

  textSize(20);

  text("SE ACABARON LOS CRÉDITOS :c", width/2, 250);

  
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
  
