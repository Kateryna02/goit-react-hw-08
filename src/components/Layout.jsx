
import { Outlet } from "react-router-dom"
import NawBar from "./NawBar"
import { Suspense } from "react"
export default function Layout() {
  return (
      <div>
      <NawBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
          
    </div>
  )
}
