import React, {useState} from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom';
import Service from './components/Service';
import Gallery from './components/Gallery';
import About from './components/About';
import Contact from './components/Contact';

function App() {

  const [toggle, setToggle] = useState(false);





  return (
    <>


<Header toggle={toggle} setToggle={setToggle}/>

<Routes>

  <Route path='/' element={<Hero/>}/>
  <Route path='/About' element={<About/>}/>
  <Route path='/Service' element={<Service/>}/>
  <Route path='/Gallery' element={<Gallery/>}/>
  <Route path='/Contact' element={<Contact/>}/>

</Routes>


<Footer setToggle={setToggle}/>




    </>
  )
}

export default App
