import Home from "./Pages/Home";
import Layout from "./Pages/Layout";
import Blog from "./Pages/Blog";
import NoPage from "./Pages/NoPage";
import Admin from "./Pages/Admin";
import Post from "./Pages/Post";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DataProvider } from "./Context/DataContext";
import "./Style/Index.css";

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="blog" element={<Blog />} />
            <Route path="posts/:id" element={<Post />} />

            <Route path="admin" element={<Admin />} />

            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
