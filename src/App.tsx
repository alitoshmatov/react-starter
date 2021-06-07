import { AppLayout } from "layouts/app-layout/app-layout";
import { Page404 } from "pages/404/404";
import { Route, Switch } from "react-router-dom";
import { routes } from "site-settings/routes";
import { GlobalStyle } from "style/global";

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <AppLayout>
      <Switch>
        {routes.map(({ path, component }) => (
          <Route path={path} component={component} exact />
        ))}
        <Route path="/*" component={Page404} />
      </Switch>
    </AppLayout>
  </>
);

export default App;
