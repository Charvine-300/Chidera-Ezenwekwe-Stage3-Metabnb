import Header from './components/Header'
import Footer from './components/Footer'
import Homepage from './components/Homepage'
import Places from './components/Places'
import ScrollToTop from './components/ScrollToTop'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {


  return (
    <>
      <Router>
        <ScrollToTop />
        <Header />
        
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/places" element={<Places />} />
        </Routes>

        <Footer />
      </Router>
    
    </>
  )
}

export default App
