import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { HomePage } from '@/pages/home/HomePage'
import { WelcomePage } from '@/pages/welcome/WelcomePage'

import { AppRoutePath } from './appRoutePath'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path={AppRoutePath.HOME()} element={<HomePage />} />
          <Route path={AppRoutePath.WELCOME()} element={<WelcomePage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
