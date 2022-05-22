import { useEffect, useState } from 'react'
import Card from '../Card/Card'
import { CardGrid } from './PastLaunchPage.style'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'

const PastLaunchPage = () => {
   const [launchData, setlaunchData] = useState(null)
   const [loading, setLoading] = useState(true)
   const [error, setError] = useState(null)

   useEffect(() => {
      const LaunchFetchDataRetrieve = async () => {
         const response = await fetch('https://api.spacexdata.com/v5/launches/past')
         const data = await response.json()
         setlaunchData(data)
      }

      LaunchFetchDataRetrieve()
         .catch((error) => {
            console.log('Error fetching Data', error)
            setError(error)
         })
         .finally(() => {
            setLoading(false)
         })
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
      </div>
   )
}

export default PastLaunchPage
