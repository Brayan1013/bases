import { lazy, LazyExoticComponent } from "react"
import NoLazy from "../01-lazyload/layout/NoLazy"

type JSXComponent = () => JSX.Element
interface Route {
  id: number
  to: string
  path: string
  name: string
  Component: LazyExoticComponent<JSXComponent> | JSXComponent
}

const LazyLayout = lazy(() => import("../01-lazyload/layout/LazyLayout"))

export const routes: Route[] = [
  {
    id: 1,
    to: "/lazyload/",
    path: "/lazyload/*",
    name: "lazyload",
    Component: LazyLayout,
  },
  {
    id: 2,
    to: "/no-lazyload",
    path: "no-lazyload",
    name: "no-lazyload",
    Component: NoLazy,
  },
]
