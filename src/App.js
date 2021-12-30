import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Users from "./Users";
import Posts from "./Posts";
import Header from "./Header";
import Userposts from "./Userposts";
import Comments from "./Comments"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" exact={true} element={<Home />}></Route>
          <Route path="/users" element={<Users />}></Route>
          <Route path="/:postId" element={<Comments />}></Route>
          <Route path="/posts" element={<Posts />}></Route>
          <Route path="/posts/:number" element={<Userposts />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
