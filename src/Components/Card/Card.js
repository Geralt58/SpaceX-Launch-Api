import { Link } from 'react-router-dom'
import dayjs from 'dayjs'
import { CardComponent, Text } from './Card.styles'

const Card = ({ name, id, date_local: date, flight_number, details, links }) => {
   const toDate = (date) => dayjs(date).format('DD/MM/YYYY HH:mm')

   return (
      <CardComponent>
         <Link to={`/launch/${id}`}>
            {links.patch.small && <img src={links.patch.small} alt="Rocket Image" />}
            <Text>
               <h3>{name}</h3>
               <ul>
                  <li>
                     <span>Launch date:</span> {toDate(date)}
                  </li>
                  <li>
                     <span>Flight number: </span>
                     {flight_number}
                  </li>
                  <li>
                     <span>Details: </span>
                     {details || 'No Details Present'}
                  </li>
               </ul>
            </Text>
         </Link>
      </CardComponent>
   )
}

export default Card
