import { Outlet } from "react-router";

import { NavItems , MobileSidebar } from "../../../components";



function AdminLayout() {
  return (
    <section className="admin-layout">
      < MobileSidebar />
      <aside className="w-max max-w-[270px] hidden lg:block"> 
        <NavItems />
    
      </aside>
      <Outlet />
    </section>
  )
}

export default AdminLayout;