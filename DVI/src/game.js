export default class Game extends Phaser.Scene {
    constructor() {
        super({ key: 'main' });
    }

    preload() {
        this.load.image("logo", "assets/favicon.png")
        this.load.image("fondo", "assets/textures/maps/menu_background.png")
        this.load.image("button_play", "assets/textures/gui/menu_button_play.png")
        this.load.image("button_exit", "assets/textures/gui/menu_button_exit.png")
        this.load.audio("medieval_m", [
            "assets/audio/bgm/menu_background.ogg",
            "assets/audio/bgm/menu_background.mp3"
        ]);
    }

    create() {
        menu(this)

        function menu(game) {

            //Crear escena
            let key = "Menu";
            let autoStart = true;
            let sceneConfig = {
                key: 'Menu',
                // active: false,
                // visible: true,
                // pack: false,
                // cameras: null,
                // map: {},
                // physics: {},
                // loader: {},
                // plugins: false,
                // input: {}
            };
            let newScene = game.scene.add(key, sceneConfig, autoStart);

            //Fondo
            newScene.fondo = newScene.add.image(newScene.game.config.width / 2, newScene.game.config.height / 2, "fondo");
            newScene.fondo.displayHeight = 956;
            newScene.fondo.displayWidth = 1433;

            //Musica
            let a_config = {
                mute: false,
                volume: 0.2,
                rate: 1,
                detune: 0,
                seek: 0,
                loop: true,
                delay: 0
            };
            let music = newScene.sound.add('medieval_m', a_config);
            music.play();

            //Boton iniciar
            newScene.playbutton = newScene.add.image(newScene.game.config.width / 2, newScene.game.config.height * 0.15, "button_play");
            newScene.playbutton.displayWidth = newScene.game.config.width / 8;
            newScene.playbutton.displayHeight = newScene.game.config.height / 8;
            newScene.playbutton.setInteractive();
            newScene.playbutton.on('pointerdown', function() {
                //do things on click
                music.stop();
                newScene.scene.remove("Menu");
                jugar(game);
            });

        }

        function jugar(game) {
            //Crear escena
            let key = "Inicio"
            let autoStart = true
            let sceneConfig = {
                key: 'Inicio',
                // active: false,
                // visible: true,
                // pack: false,
                // cameras: null,
                // map: {},
                // physics: {},
                // loader: {},
                // plugins: false,
                // input: {}
            };
            let initScene = game.scene.add(key, sceneConfig, autoStart);

            //Boton salir
            initScene.playbutton = initScene.add.image(game.game.config.width / 2, game.game.config.height / 2, "button_exit");
            initScene.playbutton.setInteractive();
            initScene.playbutton.on('pointerdown', function() {
                //do things on click
                initScene.scene.remove("Inicio");
                menu(game);
            });
        }
    }

    update(time, delta) {

    }

}