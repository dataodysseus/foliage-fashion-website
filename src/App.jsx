import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Services from './pages/Services/Services'
import Products from './pages/Products/Products'
import Categories from './pages/Categories/Categories'
import ProductCategory from './pages/Products/ProductCategory'
import Contact from './pages/Contact/Contact'
import ThankYou from './pages/ThankYou/ThankYou'
import ProductDetail from './pages/Products/ProductDetail'
import RequestQuote from './pages/RequestQuote/RequestQuote'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          {/* Route for main categories - shows subcategories */}
          <Route path="/categories/:categoryId" element={<Categories />} />
          {/* New nested route for subcategories - shows actual products */}
          <Route path="/categories/:categoryId/:subcategoryId" element={<ProductCategory />} />
          {/* Keep the old route for backward compatibility if needed */}
          <Route path="/products/:subcategoryId" element={<ProductCategory />} />
          <Route path="/categories/:categoryId/:subcategoryId/:productId" element={<ProductDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/request-quote" element={<RequestQuote />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App