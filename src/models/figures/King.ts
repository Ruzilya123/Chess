import { Figure, FigureNames } from "./Figure.ts";
import { Colors } from "../Colors.ts";
import { Cell } from "../Cell.ts";
import blackLogo from "../../assets/black-king.png";
import whiteLogo from "../../assets/white-king.png";

export class King extends Figure {

    constructor(color: Colors, cell: Cell) {
        super(color, cell); // вызов конструктора родительского класса
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = FigureNames.KING;
    }

    canMove(target: Cell): boolean {
        if (!super.canMove(target)) return false;
        const direction = this.cell.figure?.color === Colors.BLACK ? 1 : -1;

        if ((target.y === this.cell.y + direction || target.y === this.cell.y - direction ||
            target.y === this.cell.y) &&
        (target.x === this.cell.x + 1 || target.x === this.cell.x - 1 ||
            target.x === this.cell.x)) {
            return true;
        }

        if (target.y === this.cell.y + direction &&
            (target.x === this.cell.x + 1 || target.x === this.cell.x - 1) &&
        this.cell.isEnemy(target)) {
            return true;
        }

        return false;
    }

    moveFigure(target: Cell) {
        return super.moveFigure(target);
    }
}