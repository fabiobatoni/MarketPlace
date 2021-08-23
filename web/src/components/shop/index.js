import { useDispatch, useSelector } from 'react-redux'
import { setShopMapSelected, setMapCenter } from '../../store/modules/shop/actions'
import './styles.css'


const Shop = ({shop}) => {

    const dispatch = useDispatch()
    const { shopMapSelected } = useSelector(state => state.shop);

    const setSelectedShop = () => {
        //Setar shop selecionado
        //Setar o centro do mapa
        dispatch(setShopMapSelected(shop._id))
        dispatch(setMapCenter(shop.location))
    };

    return (
        <li className={`shop d-inline-block ${shopMapSelected === shop._id ? 'active' : ''}`} onClick={() => setSelectedShop()}>
            <div className="d-inline-block">
                <img src={shop.logo} className="img-fluid"/>
            </div>
            <div className="d-inline-block pl-3 align-bottom">
                <b>{shop.nome}</b>
                <div className="shop-infos">
                    <span className="mdi mdi-star"></span>
                    <text>
                        <b>2,8</b>  
                    </text>
                    <span className="mdi mdi-cash-usd-outline"></span>
                    <text>$$$</text>
                    <span className="mdi mdi-crosshairs-gps"></span>
                    <text>2,9km</text>
                </div>
                <label className="badge badge-primary">Frete Grátis</label>
            </div>
        </li>
    )
}

export default Shop;