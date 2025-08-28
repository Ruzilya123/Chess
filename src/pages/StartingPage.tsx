// import { Settings } from "../models/Settings.ts";
// import React, {useState} from "react";
// import { useNavigate } from "react-router-dom";
// // import GamePage from "./GamePage.tsx";
// import Input from "../UI/Input/Input.tsx";
//
// const StartingPage = () => {
//     const { setPlayerTime, setCanCancelStep, setLostFiguresVisible, setStarterPlayer } = new Settings();
//     const [playerTimes, setPlayerTimes] = useState<number>(300);
//     const [firstPlayer, setFirstPlayer] = useState<string>("white");
//     const [canCancelSteps, setCanCancelSteps] = useState<boolean>(false);
//     const [isLostFiguresVisible, setIsLostFiguresVisible] = useState<boolean>(false);
//
//     const onChangePlayerTimes = (event: React.ChangeEvent<HTMLInputElement>) => {
//         setPlayerTimes(Number(event.currentTarget.value));
//     }
//
//     // const onChangeColor = (value: string) => {
//     //     console.log(firstPlayer, value);
//     //     setFirstPlayer(value);
//     //     console.log(firstPlayer, value, 112312);
//     // }
//
//     const navigate = useNavigate();
//
//     const startGame = () => {
//         setPlayerTime(playerTimes);
//         setCanCancelStep(canCancelSteps);
//         setLostFiguresVisible(isLostFiguresVisible);
//         navigate("/game");
//     }
//
//     const parameters = [
//         {
//             id: "playerTimes",
//             type: "number",
//             name: "playerTimes",
//             placeholder: "Time",
//             value: playerTimes,
//             onChange: () => onChangePlayerTimes,
//             label: "Время для игрока: "
//         },
//         {
//             id: "firstPlayer",
//             as: "select",
//             name: "firstPlayer",
//             value: firstPlayer,
//             onChange: (e) => setFirstPlayer(e.target.value),
//             label: "Первым ходит: ",
//             options: ["white", "black"],
//         },
//         {
//             id: "canCancelSteps",
//             type: "checkbox",
//             name: "canCancelSteps",
//             value: canCancelSteps,
//             onChange: () => setCanCancelStep,
//             label: "Возможность отмены хода: "
//         },
//         {
//             id: "isLostFiguresVisible",
//             type: "checkbox",
//             name: "isLostFiguresVisible",
//             value: isLostFiguresVisible,
//             onChange: () => setLostFiguresVisible,
//             label: "Показывать съеденные фигуры? "
//         }
//     ]
//
//     return (
//         <div className="starting">
//             <h2>Параметры запуска</h2>
//             <div className="starting-inputs">
//                 {/*ToDo: придумать как сделать, чтобы работало с селектом*/}
//                 {parameters.map(({ id, as, name, value, onChange, label }) => (
//                     <Input
//                         key={id}
//                         name={name}
//                         id={id}
//                         type={as}
//                         value={value}
//                         onChange={onChange}
//                         label={label}
//
//                     />
//                 ))}
//             </div>
//             <button onClick={startGame}>
//                 Старт
//             </button>
//         </div>
//     );
// };
//
// export default StartingPage;