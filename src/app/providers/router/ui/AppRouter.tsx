import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {routerConfig} from "@/app/providers/router/config/routerConfig";

export const AppRouter = () => {
    return (

        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {
                    routerConfig.map(route => {
                        return (
                            <Route
                                key={route.path}
                                path={route.path}
                                element={route.element}
                            />
                        )
                    })
                }
               <Route />
            </Routes>
        </Suspense>
    );
};

export default AppRouter;