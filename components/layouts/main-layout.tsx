import { Outlet } from 'react-router'
import Navbar from '../navegation/navbar/navbar'
import Footer from '../footer/footer'

export default function MainLayout() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <Outlet />
      <Footer />
    </>
  )
}