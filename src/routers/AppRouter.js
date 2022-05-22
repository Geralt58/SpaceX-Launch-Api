import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import LatestLaunchPage from '../Components/LatestLaunchPage/LatestLaunchPage'
import UpcomingLaunchPage from '../Components/UpcomingLaunchPage/UpcomingLaunchPage'
import PastLaunchPage from '../Components/PastLaunchPage/PastLaunchPage'
import NotFoundPage from '../Components/NotFoundPage/NotFoundPage'
import LaunchDetailPage from '../Components/LaunchDetailPage/LaunchDetailPage'
import TopButton from '../Components/TopButton/TopButton'

const AppRouter = () => (
   <BrowserRouter>
      <div>
         <Header />
         <Routes>
            <Route path="/" element={<Navigate to="/launches/latest" />} exact />
            <Route path="/launches" element={<Navigate to="/launches/latest" />} exact />
            <Route path="/launches/latest" element={<LatestLaunchPage />} />
            <Route path="/launches/upcoming" element={<UpcomingLaunchPage />} />
            <Route path="/launches/past" element={<PastLaunchPage />} />
            <Route path="/launch/:id" element={<LaunchDetailPage />} />
            <Route element={<NotFoundPage />} />
         </Routes>
         <TopButton />
         <Footer />
      </div>
   </BrowserRouter>
)

export default AppRouter
