import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { publishRoutes, privateRoutes } from './routes/AppRoute';
import { Fragment } from "react"; // Import Fragment for wrapping
import DefaultLayout from "./layouts/DefaultLayout";

function App() {
  const renderRoutes = (routes) => {
    return routes.map(
      ({ path, component: Component, layout: Layout }, index) => {
        // If Layout is null, wrap with Fragment
        if (Layout === null) {
          return (
            <Route
              key={index}
              path={path}
              element={
                <Fragment>
                  <Component />
                </Fragment>
              }
            />
          );
        }

        // If Layout is undefined, use DefaultLayout
        const AppliedLayout = Layout || DefaultLayout;

        return (
          <Route
            key={index}
            path={path}
            element={
              <AppliedLayout>
                <Component />
              </AppliedLayout>
            }
          />
        );
      }
    );
  };

  return (
    <Router basename="/Travel-Mate-FrontEnd">
      <Routes>
        {renderRoutes(publishRoutes)}
        {renderRoutes(privateRoutes)}
      </Routes>
    </Router>
  );
}

export default App;
