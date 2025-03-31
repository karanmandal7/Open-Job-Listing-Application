import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter,Routes,Route } from 'react-router'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import { JobContextProvider } from './context/JobContext'

const App = () => {
  return (
    <>
        <BrowserRouter>
        <JobContextProvider>
        <Header/>
        <main className="container mx-auto py-3">
        <Routes>
          <Route path='/' Component={HomePage}/>
          <Route path='/about' Component={AboutPage}/>
          <Route path='/contact' Component={ContactPage}/>
        </Routes>
        </main>
        <Footer/>
        </JobContextProvider>
        </BrowserRouter>

    </>
  )
}

export default App
