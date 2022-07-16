import { NotFound, PrivateRoute } from "components/Common";
import { AdminLayout } from "components/Layout";
import { LoginPage } from "features/auth/pages";
import { Route, Switch, useHistory } from "react-router";
import "styles/index.css";
import { useEffect } from "react";

function App() {
  const history = useHistory();
  useEffect(() => {
    history.push("/admin");
  }, [history]);

  return (
    <div className="App">
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <PrivateRoute path="/admin">
          <AdminLayout />
        </PrivateRoute>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}
export default App;
