import './App.css'
import Header from '../components/Header'
import Article from '../components/Article'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
function App() {
  const topNav = [
    { label: "Women's", href: "..." },
    { label: "Men's", href: "..." },
    { label: "On the Street", href: "..." },
    { label: "The Catwalk", href: "..." },
    { label: "AdWatch", href: "..." },
    { label: "About", href: "..." },
  ];
  const bottomNav = [
    { label: "Home", href: "..." },
    { label: "Women's", href: "..." },
    { label: "Men's", href: "..." },
    { label: "On the Street", href: "..." },
    { label: "The Catwalk", href: "..." },
    { label: "AdWatch", href: "..." },
    { label: "About", href: "..." },
    { label: "Tips", href: "..." }
  ];
  return (
    <>
      <Header/>
      <Nav navList={topNav}/>
      <Article/>
      <Nav navList={bottomNav}/>
      <Footer/>
    </>
  )
}

export default App
