import { useParams } from 'react-router-dom'
import { useEffect, useState, useContext } from 'react'
import dayjs from 'dayjs'
import LoadingSpinner from 'Components/LoadingSpinner/LoadingSpinner'
import YouTube from 'react-youtube'
import { LaunchDetailLayot } from './LaunchDetailPage.style'
import { ThemeContext } from 'config/theme'

const LaunchDetailPage = () => {
   const [launchData, setlaunchData] = useState(null)
   const [rocketData, setRocketData] = useState(null)
   const [payloadData, setPayloadData] = useState(null)
   const [loading, setLoading] = useState(true)
   const [error, setError] = useState(null)
   const id = useParams()
   const { theme } = useContext(ThemeContext)

   const toDate = (date) => dayjs(date).format('DD/MM/YYYY HH:mm')

   useEffect(() => {
      const launchFetchDataRetrieve = async () => {
         const launchFetchResponse = await fetch(`https://api.spacexdata.com/v5/launches/${id.id}`)
         const launchFetchData = await launchFetchResponse.json()
         return launchFetchData
      }
      const rocketsFetchdataRetrieve = async () => {
         const rocketsFetchResponse = await fetch('https://api.spacexdata.com/v4/rockets')
         const rocketsFetchData = await rocketsFetchResponse.json()
         return rocketsFetchData
      }
      const payloadsFetchdataRetrieve = async () => {
         const payloadsFetchResponse = await fetch('https://api.spacexdata.com/v4/payloads')
         const payloadsFetchData = await payloadsFetchResponse.json()
         return payloadsFetchData
      }
      const DataRetrieve = async () => {
         const [launchFetchData, rocketsFetchData, payloadsFetchData] = await Promise.all([
            launchFetchDataRetrieve(),
            rocketsFetchdataRetrieve(),
            payloadsFetchdataRetrieve()
         ])

         setlaunchData(launchFetchData)
         setRocketData(rocketsFetchData)
         setPayloadData(payloadsFetchData)
      }

      DataRetrieve()
         .catch((error) => {
            console.log('Error fetching Data', error)
            setError(error)
         })
         .finally(() => {
            setLoading(false)
         })
   }, [id])

   const youtubePlayer = {
      height: '487.5',
      width: '800',
      playerVars: {
         autoplay: 1
      }
   }

   const _onReady = (event) => {
      event.target.pauseVideo()
   }

   if (loading) return <LoadingSpinner />
   if (error) return 'Error!'

   return (
      <div>
         <LaunchDetailLayot theme={theme}>
            <div>
               <h1>{launchData.name}</h1>
               <h3>Launch Details:</h3>
               <ul>
                  <li>
                     <span>Launch date:</span> {toDate(launchData.date)}
                  </li>
                  <li>
                     <span>Flight number: </span>
                     {launchData.flight_number}
                  </li>
                  <li>
                     <span>Rocket Name: </span>
                     {rocketData.find((rocket) => rocket.id === launchData.rocket).name}
                  </li>
                  <li>
                     <span>Success: </span>
                     {launchData.success ? 'Yes' : 'No'}
                  </li>
                  <li>
                     <span>Payloads: </span>
                     {launchData.payloads.map((payloadID) => (
                        <p key={payloadID}>
                           {payloadData.find((payload) => payload.id === payloadID).name} with Load{' '}
                           {payloadData.find((payload) => payload.id === payloadID).mass_kg || '0'}Kg
                        </p>
                     ))}
                  </li>
               </ul>

               <h3>Media: </h3>
               <ul>
                  <li>
                     <span>Youtube: </span>
                     <YouTube videoId={launchData.links.youtube_id} opts={youtubePlayer} onReady={_onReady} />
                  </li>
               </ul>

               <h3>Other Links:</h3>
               <ul>
                  <li>
                     <span>Article: </span>
                     {launchData.links.article ? (
                        <a href={launchData.links.article}>{launchData.links.article}</a>
                     ) : (
                        'Article not available'
                     )}
                  </li>
                  <li>
                     <span>Wikipedia: </span>
                     {launchData.links.wikipedia ? (
                        <a href={launchData.links.wikipedia}>{launchData.links.wikipedia}</a>
                     ) : (
                        'Wikipedia link not available'
                     )}
                  </li>
               </ul>
            </div>
         </LaunchDetailLayot>
      </div>
   )
}

export default LaunchDetailPage
