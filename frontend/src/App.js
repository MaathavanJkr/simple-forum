import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Topic from "./pages/Topic";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <Router>
      <Header />
        <div className="container"> 
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/register' element={<Register />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/topic/:id' element={<Topic />}/>
          </Routes>

        </div>
      <Footer />
      </Router>
    </>
  );
}

export default App;
