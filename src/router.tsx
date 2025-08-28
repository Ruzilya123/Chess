import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import App from "./App.tsx";
import GamePage from "./pages/GamePage.tsx";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route index element={<App />} />
            <Route path="game" element={<GamePage />} />
        </Route>
    )
);

