import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Posts from "./posts/Posts";
import Post from "./posts/post/Post";
import Error from "./Error";
import AppContainer from "./theme/AppContainer";
import { ThemeProvider} from "styled-components";
import GlobalStyles from "./theme/GlobalStyles";
import {PathConstants} from "./constants/PathConstants";
import {customTheme} from "./theme/Theme";

function App() {
  const helloMessage = "Hello from";

  return (
    <ThemeProvider theme={customTheme}>
      <GlobalStyles />
      <AppContainer>
        <Router>
          <Routes>
            <Route index element={<Navigate to={PathConstants.POSTS_PATH}></Navigate>}></Route>
            <Route
              path={PathConstants.POSTS_PATH}
              element={<Posts helloMessage={helloMessage} />}
            />
            <Route
              path={PathConstants.SINGLE_POST_PATH}
              element={<Post helloMessage={helloMessage} />}
            />
            <Route path="*" element={<Error />} />
          </Routes>
        </Router>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
