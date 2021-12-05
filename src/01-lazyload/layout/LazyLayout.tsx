import { NavLink, Routes, Route, Navigate } from "react-router-dom"
import { LazyPage1, LazyPage2, LazyPage3 } from ".."

const LazyLayout = () => {
  return (
    <div>
      <h1>This is the lazy layout</h1>
      <ul>
        <li>
          <NavLink to="lazyload1">Lazy load1</NavLink>
        </li>
        <li>
          <NavLink to="lazyload2">Lazy load2</NavLink>
        </li>
        <li>
          <NavLink to="lazyload3">Lazy load3</NavLink>
        </li>
      </ul>

      <Routes>
        <Route path="lazyload1" element={<LazyPage1 />} />
        <Route path="lazyload2" element={<LazyPage2 />} />
        <Route path="lazyload3" element={<LazyPage3 />} />
        <Route path="*" element={<Navigate replace to="lazyload1" />} />
      </Routes>
    </div>
  )
}

export default LazyLayout
