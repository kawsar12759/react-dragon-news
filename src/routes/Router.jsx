import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import News from "../pages/News/News";
import PrivateRoute from "./PrivateRoute";
import CategoryNews from "../pages/CategoryNews/CategoryNews";

const router = createBrowserRouter(
    [
        {
            path:'/',
            element:<Root></Root>,
            children:[
                {
                    path:'/',
                    element:<Home></Home>,
                    loader:()=> fetch('/news.json')
                },
                {
                    path:'/category/:id',
                    element:<CategoryNews></CategoryNews>,
                    loader:()=>fetch('/news.json')
                },
                {
                    path:'/news/:id',
                    element:<PrivateRoute><News></News></PrivateRoute>,
                    loader:()=>fetch('/news.json')
                },
                {
                    path:'/login',
                    element:<Login></Login>
                },
                {
                    path:'/register',
                    element:<Register></Register>
                }
            ]
        }
    ]
)

export default router;