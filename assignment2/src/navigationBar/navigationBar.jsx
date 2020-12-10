import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import React from "react";

import { useHistory } from "react-router-dom";

export function NavigationBar() {

    const history = useHistory();

    function handleHomeNavigation() {

        history.push('/');

    }

    function handleContactNavigation() {

        history.push('/contact');

    }

    return (

        <AppBar>

            <Toolbar>

                <Button
                    color="inherit"
                    onClick={handleHomeNavigation}>

                    Home
                </Button>

                <Button
                    color="inherit"
                    onClick={handleContactNavigation}>

                    Contact Us
                </Button>

            </Toolbar>

        </AppBar>

    )

}