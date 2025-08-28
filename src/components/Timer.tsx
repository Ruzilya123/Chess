import { FC, useEffect, useRef, useState } from "react";
import { Colors } from "../models/Colors.ts";
import { Player } from "../models/Player.ts";

interface TimerProps {
    currentPlayer: Player | null;
    restart: () => void;
}

const Timer: FC<TimerProps> = ({ currentPlayer, restart }) => {
    const [blackTime, setBlackTime] = useState(300);
    const [whiteTime, setWhiteTime] = useState(300);
    const timer = useRef<null | ReturnType<typeof setInterval>>(null)

    useEffect(() => {
        startTimer();
    }, [currentPlayer]);

    function startTimer() {
        if (timer.current) {
            clearInterval(timer.current);
        }
        const callback = currentPlayer?.color === Colors.WHITE ? decrementWhitePlayer : decrementBlackPlayer;
        timer.current = setInterval(callback, 1000);
    }

    function decrementBlackPlayer() {
        setBlackTime(prev => prev - 1);
    }

    function decrementWhitePlayer() {
        setWhiteTime(prev => prev - 1);
    }

    const handleRestart = () => {
        setWhiteTime(300);
        setBlackTime(300);
        restart()
    }

    return (
        <div className="timer">
            <div className="timmer-btn">
                <button onClick={() => handleRestart()}>Перезапустить игру</button>
            </div>
            <h2 className="timer-black">Черные {blackTime}</h2>
            <h2 className="timer-white">Белые {whiteTime}</h2>
        </div>
    );
};

export default Timer;