class TelaInicial extends Phaser.Scene {
  constructor() {
    super({ key: "TelaInicial" });
  }

  preload() {
    this.load.image("background", "assets/telaInicial.png");
    this.load.image("startButton", "assets/start.png");
    this.load.image("languageButton", "assets/idioma.jpg");
    this.load.image("exitButton", "assets/sair.jpg");
  }

  create() {
    var language;

    // Adiciona o fundo
    var telaBackground = this.add.image(gameState.larguraJogo / 2, gameState.alturaJogo / 2, "background");
    telaBackground.setScale(gameState.alturaJogo / telaBackground.height);
    console.log(gameState.alturaJogo / telaBackground.height);

    // Adiciona o botão de Start
    var startButton = this.add.image(610, 580, "startButton").setInteractive();
    startButton.on(
      "pointerdown",
      function () {
        this.scene.start("TelaJogo");
        // Adicione aqui a lógica para iniciar o jogo ou mudar para a próxima cena
        console.log("Iniciar jogo!");
        this.scene.stop("TelaInicial");
      },
      this
    );

    // // Adiciona o botão de Escolher Idioma
    // var languageButton = this.add.image(400, 300, "languageButton").setInteractive();
    // languageButton.on("pointerdown", function () {
    // // Adicione aqui a lógica para escolher o idioma
    // console.log("Escolher Idioma!");
    // });

    // // Adiciona o botão de Sair
    // var exitButton = this.add.image(620, 410, "exitButton").setInteractive();
    // exitButton.on("pointerdown", function () {
    // // Adicione aqui a lógica para sair do jogo
    // console.log("Sair do jogo!");
    // });
  }
}
