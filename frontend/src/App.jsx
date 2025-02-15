import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home.jsx";


const App = () => {
  return (
    <Router>
      <div className="h-full flex flex-col bg-gray-100 text-gray-900">
        
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
      </div>
    </Router>
  );
};

export default App;
