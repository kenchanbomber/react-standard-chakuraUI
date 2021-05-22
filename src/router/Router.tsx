import { memo, VFC } from "react";
import { Route, Switch } from "react-router-dom";

import { Login } from "../components/pages/Login";
import { homeRoutes } from "./homeRoutes";
import { Page404 } from "../components/pages/Page404";
import { HeaderOnly } from "../components/templates/HeaderOnly";
import { LoginUserProvider } from "../providers/LoginUserProvider";

export const Router: VFC = memo(() => {
  return (
    <LoginUserProvider>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route
          path="/home"
          render={({ match: { url } }) => (
            <Switch>
              {homeRoutes.map((route) => (
                <Route
                  key={route.path}
                  exact={route.exact}
                  path={`${url}${route.path}`}
                >
                  {
                    <HeaderOnly>
                      <route.children />
                    </HeaderOnly>
                  }
                </Route>
              ))}
            </Switch>
          )}
        />
        <Route path="*">
          <Page404 />
        </Route>
      </Switch>
    </LoginUserProvider>
  );
});
