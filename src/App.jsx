import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Homepage from './components/Homepage'
import Places from './components/Places'
import Modal from './components/Modal'
import ScrollToTop from './components/ScrollToTop'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  const [modal, setModal] = useState('none');


  return (
    <>
      <Router>
        <ScrollToTop />
        <Modal modal={modal} setModal={setModal} />
        <Header setModal={setModal} />
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
