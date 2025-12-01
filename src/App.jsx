import Login from './Pages/Login'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Main from './Pages/Main'
import Footer from './components/Footer'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Service from './Pages/Service'
import Welcome from './components/Welcome'
import Product from './Pages/Product'
import Demo from './components/Demo'
import Logout from './Pages/Logout'
import Demo2 from './components/Demo2'
import Register from './Pages/Register'
import Queries from './components/Queries'

function App() {
  return (
    <div className='bg-white w-full '>
      <Navbar />
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route index element={<Main />} />
        <Route path='product/:id' element={<Product />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='service' element={<Service />} />
        <Route path='login' element={<Login />} />
        <Route path='logout' element={<Logout />} />
        <Route path='/demo' element={<Demo />} />
        <Route path='/register' element={<Register />} />
        <Route path='/demoo' element={<Demo2 />} />
        <Route path='/query' element={<Queries />} />
      </Routes>
      <Footer/>
      
    </div>
  )
}

export default App

// Routes? In React Router, "Routes" is a component that is used to define a set of routes for your application. It acts as a container for individual "Route" components, which specify the mapping between URL paths and the components that should be rendered when those paths are accessed. The "Routes" component ensures that only the first matching route is rendered, allowing for nested routing and more complex navigation structures within a React application.