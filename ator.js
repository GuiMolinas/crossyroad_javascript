//ator
let xAtor = 85;
let yAtor = 366;

let colisao = false;

let meusPontos = 0;

function mostraAtor(){
  image(imagemAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor(){
  if(keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  
  if(keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
      yAtor += 3;
    }
  }
}

function verificaColisao(){
  for (let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
    if (colisao){
      voltaAtorPoicaoInicial();
      somDaColisao.play();
      if(pontosMaiorQueZero()){
         meusPontos -= 1;
      }
    }
  }
}

function voltaAtorPoicaoInicial(){
  yAtor = 366;
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(128,0,128));
  text(meusPontos, width / 5, 27);
}

function marcaPontos(){
  if(yAtor < 15){
    meusPontos++;
    somDoPonto.play();
    voltaAtorPoicaoInicial();
  }
}

function pontosMaiorQueZero(){
  return meusPontos > 0;
}

function podeSeMover(){
  return yAtor < 366;
}