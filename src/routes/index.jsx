import { BrowserRouter } from "react-router-dom";
import { useAuth } from "../hooks/auth";

import { AppRoutes } from "./app.router";
import { AuthRoutes } from "./auth.router";
import { useEffect } from "react";
import { api } from "../services/api";

export function Routes() {
    const { user } = useAuth();

    return(
        <BrowserRouter>
            { user ? <AppRoutes /> : <AuthRoutes /> }
        </BrowserRouter>
    );
}