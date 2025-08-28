import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Header } from "./components/header/Header.tsx";
// import StartingPage from "./pages/StartingPage.tsx";
import GamePage from "./pages/GamePage.tsx";
import { FC } from "react";

const App: FC = () => {
    return (
        <BrowserRouter>
            <div className="app">
                {/*<Header />*/}
                <Routes>
                    {/*<Route path="/" element={<StartingPage />} />*/}
                    <Route path="/" element={<GamePage />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App;
