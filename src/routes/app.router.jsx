import { useAuth } from "../hooks/auth";
import { USER_ROLE } from "../utils/role";
import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { New } from "../pages/New";
import { Dish } from "../pages/Dish";
import { Menu } from "../pages/Menu";
import { Edit } from "../pages/Edit";
import { Favorites } from "../pages/Favorites";

export function AppRoutes() {
    const { user } = useAuth();
    return (
        <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/menu" element={ <Menu /> } />
            <Route path="/dish/:id" element={ <Dish /> } />
            <Route path="/favorite" element={ <Favorites /> } />
            
            {
                [USER_ROLE.ADMIN].includes(user.role) ? 
                <Route path="/new" element={ <New /> } /> : 
                <Route path="/" element={ <Home /> } /> 
            }
            {
                [USER_ROLE.ADMIN].includes(user.role) ?
                <Route path="/edit/:id" element={ <Edit /> } /> :
                <Route path="/" element={ <Home /> } /> 
            }
        </Routes>
    );
}3