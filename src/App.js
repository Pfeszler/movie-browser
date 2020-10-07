import React from 'react';
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import Movies from "./Movies/index";
import People from "./People/index";
import { StyledNavLink, NavList, NavListItem } from "./styled";

export default () => (
    <HashRouter>
        <nav>
            <NavList>
                <NavListItem>
                    <StyledNavLink to="/movies">Movies</StyledNavLink>
                </NavListItem>
                <NavListItem>
                    <StyledNavLink to="/people">People</StyledNavLink>
                </NavListItem>
            </NavList>
            <Switch>
                <Route path="/movies">
                    <Movies />
                </Route>
                <Route path="/people">
                    <People />
                </Route>
            </Switch>
        </nav>
    </HashRouter>
);