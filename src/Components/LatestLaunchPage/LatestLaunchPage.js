import { useEffect, useState } from 'react'
import Card from '../Card/Card'
import { CardGrid } from './LatestLaunchPage.style'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'

const LatestLaunchPage = () => {
   const [launchData, setlaunchData] = useState(null)
   const [loading, setLoading] = useState(true)
   const [error, setError] = useState(null)

   useEffect(() => {
      const LaunchFetchDataRetrieve = async () => {
         const response = await fetch('https://api.spacexdata.com/v5/launches/latest')
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

   // console.log(launchData)

   if (loading) return <LoadingSpinner />
   if (error) return 'Error!'

   return (
      <CardGrid>
         <Card {...launchData} />
      </CardGrid>
   )
}

export default LatestLaunchPage
