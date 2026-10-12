import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Patients from "./pages/Patients"
import MainLayout from "./components/layout/MainLayout"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/patients" element={<Patients />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App