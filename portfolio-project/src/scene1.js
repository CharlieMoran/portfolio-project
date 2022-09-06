class scene1 extends Phase.Scene {
    constructor() {
        super({key: "scene1"})
    }

    preload(){
        this.load.image("", "assets/")
    }
    create(){
        this.image = this.add.image(400,300, "")
    }
}