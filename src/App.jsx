import { useEffect, useState } from 'react'
import './App.css'
import LeftNav from './components/left-nav'
import TopNav from './components/top-nav'
import { Routes, Route } from 'react-router-dom'
import Article from './components/Article'
import Page404 from './pages/Page404'
import HomePage from './pages/HomePage'
import AdminPage from './pages/AdminPage'
import ProfilePage from './pages/ProfilePage'
import ArticlesPage from './pages/ArticlesPage'
import NotLoggedIn from './pages/not-logged-in'
import { useAuth0 } from '@auth0/auth0-react'
import Loading from './pages/loading'

function App() {
  const { isLoading, isAuthenticated } = useAuth0()
  const [showNotLoggedIn, setShowNotLoggedIn] = useState(false)

  // create a useEffect that sets the role from auth0 user metadata if the user is authenticated
  // if the user is not authenticated, set the role to 'guest'
  // this will be used to determine if isAuthenticated is false

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      const timeout = setTimeout(() => setShowNotLoggedIn(true), 2000)
      return () => clearTimeout(timeout)
    }
    setShowNotLoggedIn(false)
  }, [isLoading, isAuthenticated])


  return (
    <div className='app-container'>
      <TopNav />
      <LeftNav />
      <div className='main-content'>
      {/* <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/articles' element={<ArticlesPage />} />
            <Route path='/article/:id' element={<Article />} />
            <Route path='/admin' element={<AdminPage />} />
            <Route path='/profile/' element={<ProfilePage />} />
            <Route path='*' element={<Page404 />} />
          </Routes> */}
        {
          !showNotLoggedIn &&
          isAuthenticated &&
          <div className="loading">
            <Loading />
          </div>
        }
        {
          !showNotLoggedIn &&
          isLoading &&
          !isAuthenticated &&
          <div className="loading">
            <Loading />
          </div>
        }
        {
          isAuthenticated &&
          !isLoading &&
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/articles' element={<ArticlesPage />} />
            <Route path='/article/:id' element={<Article />} />
            <Route path='/admin' element={<AdminPage />} />
            <Route path='/profile/' element={<ProfilePage />} />
            <Route path='*' element={<Page404 />} />
          </Routes>
        }
        {
          showNotLoggedIn &&
          !isAuthenticated &&
          <Routes>
            <Route path='*' element={<NotLoggedIn />} />
          </Routes>
        }
      </div>
    </div>
  )
}

export default App
