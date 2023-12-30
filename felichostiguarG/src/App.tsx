import Footer from "./app/shared/components/footer/Footer"
import Header from "./app/shared/components/header/Header"


import Home from './app/pages/home/Home'

import { Routes, Route } from "react-router-dom"
import ProductDetail from "./app/pages/product-detail/ProductDetail"


function App() {
  return(    
    <>
      <Header />
      <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/product-detail/:id" element={ <ProductDetail /> } />
      </Routes>

      <Footer/>
    </>
  )
}

export default App

