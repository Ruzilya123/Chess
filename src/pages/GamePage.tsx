import {useEffect, useState} from "react";
import {Player} from "../models/Player.ts";
import {Colors} from "../models/Colors.ts";
import {Board} from "../models/Board.ts";
import BoardComponent from "../components/BoardComponent.tsx";
import LostFigures from "../components/LostFigures.tsx";
import Timer from "../components/Timer.tsx";
import "../App.css"


const GamePage = () => {
    const [board, setBoard] = useState(new Board());
    const [whitePlayer] = useState(new Player(Colors.WHITE));
    const [blackPlayer] = useState(new Player(Colors.BLACK));
    const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);

    useEffect(() => {
        restart();
        setCurrentPlayer(whitePlayer);
    }, [whitePlayer]);

    function restart() {
        const newBoard = new Board();
        newBoard.initCells();
        newBoard.addFigures();
        setBoard(newBoard);
    }

    function swapPlayer() {
        setCurrentPlayer(currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer);
    }

    return (
        <div className="game">
            <Timer currentPlayer={currentPlayer} restart={restart} />
            <BoardComponent
                board={board}
                setBoard={setBoard}
                currentPlayer={currentPlayer}
                swapPlayer={swapPlayer}
            />
            <div className="lost-figures">
                <LostFigures title="Черные фигуры" figures={board.lossBlackFigures} />
                <LostFigures title="Белые фигуры" figures={board.lossWhiteFigures} />
            </div>
        </div>
    );
};

export default GamePage;