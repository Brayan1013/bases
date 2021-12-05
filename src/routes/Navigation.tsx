import { Suspense } from "react"
import { BrowserRouter } from "react-router-dom"
import { Routes, Route, NavLink, Navigate } from "react-router-dom"
import logo from "../logo.svg"
import { routes } from "./routes"
export const Navigation = () => {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React logo" />
            <ul>
              {routes.map(({ to, name, id }) => {
                return (
                  <li key={id}>
                    <NavLink
                      to={to}
                      className={({ isActive }) =>
                        isActive ? "nav-active" : ""
                      }
                    >
                      {name}
                    </NavLink>
                  </li>
                )
              })}
            </ul>
          </nav>

          <Routes>
            {routes.map(({ path, Component, id }) => (
              <Route key={id} path={path} element={<Component />} />
            ))}
            <Route path="/*" element={<Navigate to={routes[0].to} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  )
}
