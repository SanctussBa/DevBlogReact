import { Outlet, Link } from "react-router-dom";
//The <Outlet> renders the current route selected.

const Layout = () => {
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
        <div className="main-container-left">

        </div>
        <div className="main-container-middle">
          <Outlet />
        </div>
        <div className="main-container-right">

        </div>

      </main>

      
    </>
  )
};

export default Layout;