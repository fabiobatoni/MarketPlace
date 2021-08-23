import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { requestShop } from '../../store/modules/shop/actions'

import Header from '../../components/header'
import Product from '../../components/product/card'
import './styles.css'

const Shop = ({ match }) => {

    const dispatch = useDispatch();

    const { shop } = useSelector(state => state.shop)

    useEffect(() => {
       dispatch(requestShop(match.params.id));
    }, [])

    return(
        <div className="h-100">
            <Header/>
            <div className="container">
                <div className="row">
                    <div className="col-2">
                        <img src={shop.logo}  className="img-fluid shop-image" />
                        <b>{shop.nome}</b>
                        <div className="shop-infos">
                            <span className="mdi mdi-star"></span>
                            <text>
                              <b>2,8</b>  
                            </text>
                            <span className="mdi mdi-cash-usd-outline"></span>
                            <text>{shop.categoria}</text>
                            <span className="mdi mdi-crosshairs-gps"></span>
                            <text>2,9km</text>
                        </div>
                        <label className="badge badge-primary">Frete Grátis</label>
                    </div>
                    <div className="col-10">
                        <h5>Produtos</h5>
                        <br></br>   
                        <div className="row">
                          {shop.products?.map((p) => (
                               <Product product={p} />
                           ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shop