import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { publishRoutes, privateRoutes } from './routes/AppRoute';

function App() {
  const renderRoutes = (routes) => {
    return routes.map(({ path, component: Component, layout: Layout }, index) => {
      if (Layout) {
        return (
          <Route
            key={index}
            path={path}
            element={
              <Layout>
                <Component />
              </Layout>
            }
          />
        );
      }
      return <Route key={index} path={path} element={<Component />} />;
    });
  };

  return (
    <Router basename="/Travel-Mate-FrontEnd"> {/* Ensure this matches your repo name */}
      <Routes>
        {renderRoutes(publishRoutes)}
        {renderRoutes(privateRoutes)}
      </Routes>
    </Router>
  );
}

export default App;
