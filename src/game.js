var gameState = {
  larguraJogo: window.innerWidth,
  alturaJogo: window.innerHeight,
};

var config = {
  type: Phaser.AUTO,
  width: gameState.larguraJogo,
  height: gameState.alturaJogo,
  scene: [TelaInicial, TelaJogo],
};
var game = new Phaser.Game(config);
