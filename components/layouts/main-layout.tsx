import { Outlet } from 'react-router'
import Navbar from '../navbar/navbar'
import Footer from '../footer/footer'

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}