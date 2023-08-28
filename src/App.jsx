import './App.css'
import NavLeft from './components/nav-left'
import NavTop from './components/nav-top'
import { Routes, Route } from 'react-router-dom'
import Article from './components/Article'
import Articles from './pages/ToCArticles'
import Home from './pages/Home'
import Feedback from './pages/Feedback'
import Tools from './pages/Tools'

function App() {

  return (
    <div className='container'>
      <NavTop />
      <NavLeft />

      <div className='Content'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path ="/articles" element={<Articles />} />
            <Route path="/articles/:id" element={<Article />} />
            <Route path='/feedback' element={<Feedback />} />
            <Route path='/tools' element={<Tools />} />
          </Routes>

      </div>
    </div>
  )
}

export default App
