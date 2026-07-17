import { Route, Routes, BrowserRouter } from "react-router"
import MainLayout from "../components/layouts/main-layout"
import Home from "../pages/home/home"
import NotFound from "../pages/not-found/not-found"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />} >
          <Route index path="/" element={<Home />} />
          <Route path="/*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter >

  )
}

export default App
