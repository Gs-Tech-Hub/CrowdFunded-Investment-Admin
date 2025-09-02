import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login, ForgotPassword, Admin, Campaign } from './AllFiles'


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' index element={<Login />} />
        <Route path='/forgotPassword' index element={<ForgotPassword />} />
        <Route path='/admin' index element={<Admin />} />
        <Route path='Campaign/:id' index element={<Campaign />} />
        <Route path='/*' element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App