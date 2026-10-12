import { Link } from "react-router-dom"

function Sidebar() {
    return (
        <aside className="w-64 min-h-screen bg-gray-900 p-5 text-white">
            <h1 className="mb-8 text-2xl font-bold">Clinic Queue</h1>
            <nav className="flex flex-col gap-2">
                <Link to="/" className="rounded-lg p-3 hover:bg-slate-700">
                    Dashboard
                </Link>
                <Link to="/patients" className="rounded-lg p-3 hover:bg-slate-700">
                    Patients
                </Link>
                <Link to="/appointments" className="rounded-lg p-3 hover:bg-slate-700">
                    Appointments
                </Link>
            </nav>
        </aside>
    )
}
export default Sidebar