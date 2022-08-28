import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Posts from "./features/posts/Posts";
import Post from "./features/post/Post";
import Error from "./features/Error";

function App() {
  const helloMessage = "Hello from";

  return (
    <Router>
      <Routes>
        <Route index element={<Navigate to="/posts"></Navigate>}></Route>
        <Route path="/posts" element={<Posts helloMessage={helloMessage} />} />
        <Route
          path="/post/:id"
          element={<Post helloMessage={helloMessage} />}
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
