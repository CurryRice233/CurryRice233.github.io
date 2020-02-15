
export default class Game extends Phaser.Scene {
  constructor() {
    super({ key: 'main' });
  }
  preload() {
    this.load.image("logo", "assets/favicon.png")
  }

  create() {
    this.logo = this.add.image(this.game.config.width/2, this.game.config.height/2, "logo")
    this.logo.displayHeight=200
    this.logo.displayWidth =135
  }

  update(time, delta) {
    this.logo.rotation += 0.07
  }
}
