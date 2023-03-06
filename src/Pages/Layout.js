import { Outlet, Link } from "react-router-dom";
//The <Outlet> renders the current route selected.
import { useDataContext } from "../Context/DataContext";
import { useEffect } from "react";
import Log from "../Components/Log";

const Layout = () => {
  const { logs, fetchLogs, fetchAllPosts } = useDataContext();


  useEffect(() => {
    fetchLogs();
    fetchAllPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/admin">Admin</Link>
          </li>
        </ul>
      </nav>
      <main className="main-container">
        <div className="main-container-left"></div>
        <div className="main-container-middle">
          <Outlet />
        </div>
        <div className="main-container-right">
          {logs &&
            logs.map(l => (
              <div key={l.id}>
                <Link to={`/posts/${l.postId}`}>
                  <Log log={l}/>
                </Link>
              </div>
            ))}
        </div>
      </main>
    </>
  );
};

export default Layout;
