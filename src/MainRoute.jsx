import { Route, Routes } from "react-router-dom";
import Products from "./pages/Products/Products";

const MainRoute = () => {
    return (
        <>
            <Routes>
                <Route path="products" element={<Products />} />
            </Routes>
        </>
    );
};
export default MainRoute;
