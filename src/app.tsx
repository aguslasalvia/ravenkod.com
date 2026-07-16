import { Route, Routes, BrowserRouter } from "react-router"
import MainLayout from "../components/layouts/main-layout"
import Home from "../pages/home/home"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />} >
          <Route index path="/" element={<Home />} />
          <Route path="/*" element={<div>Page not found</div>} />
        </Route>
      </Routes>
    </BrowserRouter >

  )
}

export default App
