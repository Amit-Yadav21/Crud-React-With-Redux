import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Crud from "./component/Crud"; // Import Crud component
import { Provider } from "react-redux";
import { store } from "./store/store"; // Import Redux store

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/* Route for the Crud component */}
          <Route path="/" element={<Crud />} />
          {/* Add other routes here if needed */}
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;