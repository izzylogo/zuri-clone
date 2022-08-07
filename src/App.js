import Home from "./pages/home/Home";
import Industry from "./pages/industry/Industry";
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom'
import Experience from "./pages/experience/Experience";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/train" element={<Industry />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
