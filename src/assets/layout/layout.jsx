import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/headphones">Headphones</Link>
          </li>
          <li>
            <Link to="/earphones">Earphones</Link>
          </li>
          <li>
            <Link to="/speakers">Speakers</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
