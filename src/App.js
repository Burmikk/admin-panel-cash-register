import { BrowserRouter } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import MainRoute from "./MainRoute";

function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <MainRoute />
        </BrowserRouter>
    );
}

export default App;
