import { FC } from "react";
import { Figure } from "../models/figures/Figure.ts";

interface FigureProps {
    title: string;
    figures: Figure[];
}

const LostFigures: FC<FigureProps> = ({ title, figures }) => {
    return (
        <div className="lost">
            <h3 className="lost-title">{title}</h3>
            {figures.map(figure =>
                <div className="lost-figure" key={figure.id}>
                    {figure.name} {figure.logo && <img width="20px" height="20px" src={figure.logo} alt="" />}
                </div>
            )}
        </div>
    );
};

export default LostFigures;