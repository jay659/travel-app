import { Outlet } from "react-router";

function AdminLayout() {
  return (
    <>
      <div>admin-layout</div>
      <aside className="w-64 h-screen bg-gray-800 text-white">
        <aside className="childern">
            <Outlet />
        </aside>
      </aside>
    </>
  )
}

export default AdminLayout;