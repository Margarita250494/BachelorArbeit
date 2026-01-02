import {lazy, Suspense} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import "./App.css";


// Lazy load pages
const Home = lazy(() => import("./Pages/Home"));
const Legal = lazy(() => import("./Pages/Legal"));
const Appointment = lazy(() => import("./Pages/Appointment"));
const NotFound = lazy(() => import("./Pages/NotFound"));

function App() {
  return (
    <div className="App">
      <Router basename="/Health-Plus">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/legal"
              element={<Legal />}
            />
            <Route
              path="/appointment"
              element={<Appointment />}
            />
            <Route
              path="*"
              element={<NotFound />}
            />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;