// ça n'a pas de sens de l'instancier, c'est pour ça qu'on ajoute abstract
export abstract class Drawable {
    protected ctx: CanvasRenderingContext2D;
    protected canvas: HTMLCanvasElement;
    protected sprite: HTMLImageElement;

    protected constructor(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, sprite: HTMLImageElement) {
        this.ctx = ctx;
        this.canvas = canvas;
        this.sprite = sprite;
    }
}