import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { requestShops } from '../../store/modules/shop/actions'

import './styles.css';
import Header from '../../components/header';
import Shop from '../../components/shop';
import Map from '../../components/map';

const Home = () => {

    const dispatch = useDispatch()
    const { shops } = useSelector((state) => state.shop)

    useEffect(() => {
        dispatch(requestShops());
    }, [])

    return (
        <div className="h-100">
            <Header />
            <div className="container-fluid shop-list-container">
                <div className="col-12 px-4 text-center">
                    <h5>Mais próximos de você ({shops.length})</h5>
                </div>
                <ul className="col-12 shop-list">
                    {shops.map((p) => <Shop shop={p} />)}
                </ul>
            </div>
            <Map shops={shops} />
        </div>
    )
}

export default Home;