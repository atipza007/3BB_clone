import React from 'react'
import ReactDOM from 'react-dom/client'
import Nav from './component/Navbar'
import Nav1 from './component/NavbarTop'
import Slide from './component/Slideshow'
import Content from './component/Content'
import Content2 from './component/Content2'
import Content3 from './component/Content3'
import Carousel from './component/carousel/Setcarouselpic'
import News from './component/news/Setnews'
import Footer1 from './component/footer/footer1'
import Footer2 from './component/footer/footer2'
import Cookiebar from './component/Cookiebar'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Nav1/>
    <Nav/>
    <Slide/>
    <Content/>
    <Content2/>
    <Content3/>
    <Carousel/>
    <News/>
    <Footer1/>
    <Footer2/>
    <Cookiebar/>
  </>,
)
