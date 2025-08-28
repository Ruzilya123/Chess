import { Figure, FigureNames } from "./Figure.ts";
import { Colors } from "../Colors.ts";
import { Cell } from "../Cell.ts";
import blackLogo from "../../assets/black-rook.png";
import whiteLogo from "../../assets/white-rook.png";

export class Rook extends Figure {

    constructor(color: Colors, cell: Cell) {
        super(color, cell); // вызов конструктора родительского класса
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = FigureNames.ROOK;
    }

    canMove(target: Cell): boolean {
        if (!super.canMove(target)) return false;
        if (this.cell.isEmptyHorizontal(target)) return true;
        return this.cell.isEmptyVertical(target);

    }
}