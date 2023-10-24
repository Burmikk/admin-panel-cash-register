import { Route, Routes } from "react-router-dom";
import Products from "./pages/Products/Products";
import Receipts from "./pages/Receipts/Receipts";

const MainRoute = () => {
    return (
        <>
            <Routes>
                <Route path="products" element={<Products />} />
                <Route path="receipts" element={<Receipts />} />
            </Routes>
        </>
    );
};
export default MainRoute;
