class TelaJogo extends Phaser.Scene {
  constructor() {
    super({ key: "TelaJogo" });
  }

  preload() {
    this.load.video("video", "assets/video.mp4", "canplay", false, true);
  }
  create() {
    const video = this.add.video(gameState.larguraJogo / 2, gameState.alturaJogo / 2, "video");
    video.setScale(gameState.alturaJogo / video.height);
    video.play(true);
  }
}
