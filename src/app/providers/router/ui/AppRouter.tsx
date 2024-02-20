import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {routerConfig} from "@/app/providers/router/config/routerConfig";

type AppRouterProps = {
    className?: string
}

export const AppRouter = (props: AppRouterProps) => {
    const {className} = props
    return (

        <div className={className}>
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
        </div>
    );
};

export default AppRouter;