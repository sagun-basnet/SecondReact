import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import ServicePage from "./pages/ServicePage"
import ContactPage from "./pages/ContactPage"
import SignPage from "./pages/SignPage"
import LoginPage from "./pages/LoginPage"
import PageNotFound from "./pages/PageNotFound"
import Navbar from "./components/global/Navbar"
const App = () => {

  const Layout = () => {
    return (
      <>
        <Navbar />
        <Outlet />
      </>
    )
  }

  const routerPath = createBrowserRouter(
    [
      {
        path: "/",
        element: <Layout />,
        children: [
          {
            path: '/',
            element: <HomePage />,
          },
          {
            path: '/about',
            element: <AboutPage />,
          },
          {
            path: '/service',
            element: <ServicePage />,
          },
          {
            path: '/contact',
            element: <ContactPage />,
          },
        ]
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/signup',
        element: <SignPage />,
      },
      {
        path: '*',
        element: <PageNotFound />,
      },
    ]
  )

  return (
    <>
      <RouterProvider router={routerPath} />
      {/* <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/signup" element={<SignPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes> */}



    </>
  )
}

export default App
