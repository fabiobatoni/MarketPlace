import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import Dock from 'react-dock'
import './styles.css'

import Product from '../product/list'
import './styles.css'

const Sidebar = () => {

    const history = useHistory();
    const { cart } = useSelector(state => state.shop)
    const total = cart.reduce((total, product) => {
        return total + product.preco;
    }, 0)
    const [opened, setOpened] = useState(false)

    useEffect(() => {
        window.addEventListener('openCart', () => {
            setOpened(true);
        })
    }, [])

    return(
        <Dock
            isVisible={opened}
            onVisibleChange={(visible) => {setOpened(visible)}}
            position="right"
        >
        <div className="container-fluid h-100 pt-4 sidebar">
            <h5>Minha Sacola ({cart.length})</h5>

            <div className="row products">
               {cart.map((p) => (
                   <Product product={p} />
               ))}
            </div>

            <div className="row align-items-end footer">
                <div className="col-12 d-flex justify-content-between align-items-center">
                    <b className="d-inline-block">Total</b>
                    <h3 className="d-inline-block">R$ {total.toFixed(2)} </h3>
                </div>
                <button onClick={() => history.push('/checkout')} className="btn btn-block btn-lg btn-primary rounded-0 h-50 align-items-center">Finalizar Compra</button>
            </div>
        </div>
        </Dock>
    )
}

export default Sidebar