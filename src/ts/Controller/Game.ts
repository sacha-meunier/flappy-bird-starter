import {IAnimatable} from "../Types/IAnimatable";
import {Background} from "../Models/Background";
import {Ground} from "../Models/Ground";

export class Game {
    private readonly canvas: HTMLCanvasElement;
    private readonly ctx: CanvasRenderingContext2D;
    private readonly sprite: HTMLImageElement;
    private drawables: IAnimatable[];

    constructor() {
        this.canvas = document.getElementById('game') as HTMLCanvasElement;
        this.ctx = this.canvas.getContext('2d');
        this.sprite = new Image();
        this.sprite.src = 'src/resources/sprite.png';

        this.drawables = [
            new Background(this.ctx, this.canvas, this.sprite),
            new Ground(this.ctx, this.canvas, this.sprite),
        ];

        this.addEventListeners();
    }

    addEventListeners() {
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