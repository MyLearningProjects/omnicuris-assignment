import React, {
    Suspense,
    Component 
}                       from "react";
import { 
    Route, 
    Switch, 
    withRouter,
}                       from "react-router-dom";
import {
    ROUTE_PATHS
}                       from "../../Constants";
import Courses          from "../../../pages/Courses";
import Home             from "../../../pages/Home";
import PageNotFound     from "../../../pages/404";
import PageLoader       from "../../Components/PageLoader";

class Routes extends Component {
    render() {
        console.log(ROUTE_PATHS)
        return (
            <Suspense fallback={<PageLoader />}>
                <Switch>
                    <Route
                        path={ROUTE_PATHS.COURSES}
                        exact={true}
                        render={props => (
                            <Courses/>
                        )}
                    />

                    <Route
                        path={ROUTE_PATHS.HOME}
                        exact={true}
                        render={props => (
                            <Home/>
                        )}
                    />

                    <Route component={PageNotFound} />
                </Switch>
    </Suspense>
        )
    }
}

export default withRouter(Routes);

