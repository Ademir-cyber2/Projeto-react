import Home from "pages/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "components/Navbar";
import Mostruario from "pages/Mostruario";

const Routes = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/mostruario">
                        <Mostruario />
                    </Route>
                </Switch>

            </BrowserRouter>
        </>

    );
}

export default Routes;