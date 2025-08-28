import {Colors} from "./Colors.ts";

export class Settings {
    playerTime: number = 300;
    starterPlayer: string = Colors.WHITE;
    canCancelStep: boolean = true;
    isLostFiguresVisible: boolean = true;

    public setPlayerTime(value: number) {
        console.log(value)
        this.playerTime = value;
    }

    public setStarterPlayer(value: Colors) {
        this.starterPlayer = value;
    }

    public setCanCancelStep(value: boolean) {
        this.canCancelStep = value;
    }

    public setLostFiguresVisible(value: boolean) {
        this.isLostFiguresVisible = value;
    }
}