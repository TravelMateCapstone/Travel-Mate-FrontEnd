import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { publishRoutes, privateRoutes } from "./routes/AppRoute";
import { Fragment } from "react"; // Import Fragment for wrapping
import DefaultLayout from "./layouts/DefaultLayout";
import { ToastContainer } from "react-toastify";
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
                <ToastContainer
                  position="bottom-right" // Hiển thị thông báo ở góc dưới bên phải
                  autoClose={3000} // Thông báo tự đóng sau 5 giây
                  hideProgressBar={false} // Hiển thị thanh tiến trình
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                />
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
