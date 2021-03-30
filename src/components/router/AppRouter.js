import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import App from "../../App";
import { useStylesGlobal } from "../../helpers/globalAppClasses";
import Topic from "../functions/Topic";

export default function AppRouter() {
  useStylesGlobal();

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <App />
          </Route>
          {/* Se creara pagina principal donde salgan todos los templates? */}
          <Route exact path='/:topicId'>
            <Topic />
          </Route>

          <Redirect to="/" />
        </Switch>
      </Router>
    </>
  );
}
