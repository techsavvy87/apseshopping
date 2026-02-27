import { Fragment, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "./utils/routes";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, idx) => {
          const Component = route.component;
          const Layout = route.layout || Fragment;
          const AuthRequire = route.guard || Fragment;
          return (
            <Route
              key={idx}
              path={route.path}
              element={
                <AuthRequire>
                  <Layout>{Component}</Layout>
                </AuthRequire>
              }
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
