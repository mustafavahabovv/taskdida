import { createBrowserRouter } from "react-router";
import Layout from "../layout/Layout";
import Home from "../pages/home/Home";
import Admin from "../pages/admin/Admin";
import Basket from "../pages/basket/Basket";
import Wish from "../pages/wishlist/Wish";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/admin",
                element: <Admin />,
            },
            {
                path: "/card",
                element: <Basket />,
            },
            {
                path: "/wish",
                element: <Wish />,
            },
            
        ],
    },
    {
        path: "*",
        element: <div>404 Not Found Page</div>,
    }
]);