import Home from "../pages/Home/Home"
import { Route, Routes, BrowserRouter } from "react-router"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/*" element={<h1>Page not found</h1>} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
