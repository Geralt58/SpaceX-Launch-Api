import { useEffect, useState } from 'react'
import Card from '../Card/Card'
import { CardGrid } from './UpcomingLaunchPage.style'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import TopButton from '../TopButton/TopButton'

const UpcomingLaunchPage = () => {
   const [launchData, setlaunchData] = useState(null)
   const [loading, setLoading] = useState(true)
   const [error, setError] = useState(null)

   useEffect(async () => {
      try {
         const response = await fetch('https://api.spacexdata.com/v5/launches/upcoming')
         const data = await response.json()
         setlaunchData(data)
      } catch (error) {
         console.log('Error fetching Data', error)
         setError(error)
      } finally {
         setLoading(false)
      }
   }, [])

   if (loading) return <LoadingSpinner />
   if (error) return 'Error!'

   return (
      <div>
         <CardGrid>
            {launchData.map((launch) => (
               <Card key={launch.id} {...launch} />
            ))}
         </CardGrid>
         <TopButton />
      </div>
   )
}

export default UpcomingLaunchPage
