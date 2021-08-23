import './styles.css';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import MarkerIcon from '../../assets/marker.png'
import MarkerIconSelected from '../../assets/marker-selected.png'

const Marker = ({shop}) => {

    const { shopMapSelected } = useSelector(state => state.shop);



   return(
        <Link to={`/shop/${shop._id}`}>
            <img src={shopMapSelected === shop._id ? MarkerIconSelected : MarkerIcon} />
            <img src={shop.logo} className="img-marker" />
        </Link>
   )
} 
export default Marker;