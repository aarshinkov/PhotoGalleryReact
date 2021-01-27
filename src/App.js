import './App.css';
import Images from './pages/Images';
import Home from './pages/Home';
import Layout from './layout/Layout';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const routes = [
  {
    path: '/',
    exact: true,
    main: () => <Layout>
      <Images />
    </Layout>
  },
  {
    path: '/home',
    exact: true,
    main: () => <Layout>
      <Home />
    </Layout>
  }
];

const getRoutes = () => {
  const routeComponents = routes.map((route, index) => {
    return <Route
      key={index}
      path={route.path}
      exact={route.exact}
    >
      {route.main}
    </Route>
  });

  return routeComponents;
}

function App() {
  return (
    <Router>
      <Switch>
        {getRoutes()}
      </Switch>
    </Router>
  );
}

export default App;
