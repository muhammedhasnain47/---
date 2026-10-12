import { Link, Outlet } from "react-router-dom"

function MainLayout() {
  return (
    <div className="min-h-screen">
      <nav className="flex gap-6 bg-blue-700 p-4 text-white">
        <Link to="/">Home</Link>
        <Link to="/patients">Patients</Link>
      </nav>

      <main className="p-8">
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout