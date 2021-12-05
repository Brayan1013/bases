import { lazy, LazyExoticComponent } from "react"
import React from "react"

type JSXComponent = () => JSX.Element
interface Route {
  id: number
  to: string
  path: string
  name: string
  Component: LazyExoticComponent<JSXComponent> | JSXComponent
}

const lazy1 = lazy(
  /* webpackChunkName: "LazyPage1" */ () =>
    import("../01-lazyload/pages/LazyPage1")
)
const lazy2 = lazy(
  /* webpackChunkName: "LazyPage2" */ () =>
    import("../01-lazyload/pages/LazyPage2")
)
const lazy3 = lazy(
  /* webpackChunkName: "LazyPage3" */ () =>
    import("../01-lazyload/pages/LazyPage3")
)

export const routes: Route[] = [
  {
    id: 1,
    to: "/lazyload1",
    path: "lazyload1",
    name: "Lazy-load1",
    Component: lazy1,
  },
  {
    id: 2,
    to: "/lazyload2",
    path: "lazyload2",
    name: "Lazy-load2",
    Component: lazy2,
  },
  {
    id: 3,
    to: "/lazyload3",
    path: "lazyload3",
    name: "Lazy-load3",
    Component: lazy3,
  },
]
