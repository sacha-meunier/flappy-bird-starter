import {IAnimatable} from "../Types/IAnimatable";
import {Background} from "../Models/Background";
import {Ground} from "../Models/Ground";
import {settings} from "../settings";

export class Game {
    private readonly backgroundCanvas: HTMLCanvasElement;
    private readonly backgroundCtx: CanvasRenderingContext2D;
    private readonly groundCanvas: HTMLCanvasElement;
    private readonly groundCtx: CanvasRenderingContext2D;
    private readonly birdieCanvas: HTMLCanvasElement;
    private readonly birdieCtx: CanvasRenderingContext2D;
    private readonly pipesCanvas: HTMLCanvasElement;
    private readonly pipesCtx: CanvasRenderingContext2D;
    private readonly sprite: HTMLImageElement;
    private drawables: IAnimatable[];

    constructor() {
        this.backgroundCanvas = document.getElementById(settings.background.selector) as HTMLCanvasElement;
        this.backgroundCtx = this.backgroundCanvas.getContext('2d');
        this.groundCanvas = document.getElementById(settings.ground.selector) as HTMLCanvasElement;
        this.groundCtx = this.groundCanvas.getContext('2d');
        this.birdieCanvas = document.getElementById(settings.birdie.selector) as HTMLCanvasElement;
        this.birdieCtx = this.birdieCanvas.getContext('2d');
        this.pipesCanvas = document.getElementById(settings.tubesPair.selector) as HTMLCanvasElement;
        this.pipesCtx = this.pipesCanvas.getContext('2d');

        this.sprite = new Image();
        this.sprite.src = 'src/resources/sprite.png';

        this.drawables = [
            new Background(this.backgroundCtx, this.backgroundCanvas, this.sprite),
            new Ground(this.groundCtx, this.groundCanvas, this.sprite),
        ];

        this.addEventListeners();
    }

    private addEventListeners() {
        this.sprite.addEventListener('load', () => {
            this.animate();
        });
    }

    private animate() {
        this.drawables.forEach((iAnimatable: IAnimatable) => {
            iAnimatable.draw();
            iAnimatable.update();
        });

        // Appel de la référence de la fonction !
        // Si appel de fonction, on a return void
        window.requestAnimationFrame(this.animate.bind(this));
    }
}