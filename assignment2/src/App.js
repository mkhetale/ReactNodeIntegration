import React from "react";

import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom";

import { HomePage } from "./pages/homePage";
import { ContactPage } from "./pages/contactPage";
import Grid from '@material-ui/core/Grid';

import { NavigationBar } from "./navigationBar/navigationBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./App.css";

function App() {
  return (
    <BrowserRouter>

        <CssBaseline />
        <div className="background">

            <NavigationBar />
            <Switch>
                <Route path="/contact">
                    <ContactPage/>
                </Route>
                <Route path="/">
                    <HomePage/>
                </Route>
                

            </Switch>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <div className="footer">
                  <p>© 2020 Mihir Khetale</p>
              </div>
            </Grid>
            

        </div>

    </BrowserRouter>
  );
}

export default App;
