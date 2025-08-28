import { Figure, FigureNames } from "./Figure.ts";
import { Colors } from "../Colors.ts";
import { Cell } from "../Cell.ts";
import blackLogo from "../../assets/black-bishop.png";
import whiteLogo from "../../assets/white-bishop.png";

export class Bishop extends Figure {

    constructor(color: Colors, cell: Cell) {
        super(color, cell); // вызов конструктора родительского класса
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = FigureNames.BISHOP;
    }

    canMove(target: Cell): boolean {
        if (!super.canMove(target)) return false;
        return this.cell.isEmptyDiagonal(target);

    }
}
