
import { Outlet } from "react-router-dom"
import NawBar from "./NawBar"
export default function Layout() {
  return (
      <div>
          <NawBar/>
          <Outlet />
    </div>
  )
}
