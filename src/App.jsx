import { BrowserRouter } from "react-router-dom";
import scss from "./App.module.scss";
import NavBar from "./components/NavBar/NavBar";
import MainRoute from "./MainRoute";

function App() {
    return (
        <main className={scss.main}>
            <BrowserRouter>
                <div className={scss.container}>
                    <NavBar />
                    <MainRoute />
                </div>
            </BrowserRouter>
        </main>
    );
}

export default App;
