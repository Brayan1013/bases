import { BrowserRouter } from "react-router-dom"
import { Routes, Route, NavLink, Navigate } from "react-router-dom"
import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload"
import logo from "../logo.svg"
export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React logo" />
          <ul>
            <li>
              <NavLink
                to="/lazyload1"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                lazyload1
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/lazyload2"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                lazyloadad2
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/lazyload3"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                lazyload3
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="lazyload1" element={<LazyPage1 />} />
          <Route path="lazyload2" element={<LazyPage2 />} />
          <Route path="lazyload3" element={<LazyPage3 />} />
          <Route path="*" element={<Navigate to="/lazyload1" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
