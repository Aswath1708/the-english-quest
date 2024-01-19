import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { createContext, useState } from "react";
export const BookListContext = createContext();
function App() {
  const [bookList, setBookList] = useState([]);

  return (
    <BookListContext.Provider value={{ bookList, setBookList }}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Footer />
      </div>
    </BookListContext.Provider>
  );
}

export default App;
