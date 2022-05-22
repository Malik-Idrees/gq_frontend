import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Dashboard from './pages/Dashboard'
import Course from './pages/Course'
import Profile from './pages/Profile'
import Login from './pages/Login'
import Register from './pages/Register'
import LandingPage from './pages/LandingPage'
import CourseDetail from './pages/CourseDetail'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/back-home' element={<LandingPage />} />
                <Route path='/register' element={<Register />} />
            </Routes>

            <Routes>
                <Route path='/dashboard' element={<Course />} />
                <Route path='/course' element={<Course />} />
                <Route path='/course/:courseId' element={<CourseDetail />} />
                <Route path='/profile' element={<Profile />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
