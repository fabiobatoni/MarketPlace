import { BrowserRouter as Router, Route } from 'react-router-dom'

import './styles/global.css';
import Sidebar from './components/sidebar';
import Cadastro from './pages/cadastro';
import Checkout from './pages/checkout';
import Shop from './pages/shop';
import Home from './pages/home';

const Routes = () => {
    return(
        <>
        <Router>
            <Route path="/home" exact component={Home} />
            <Route path="/shop/:id" exact component={Shop} />
            <Route path="/checkout" exact component={Checkout} />
            <Route path="/" exact component={Cadastro} />
            <Sidebar />
        </Router>
        </>
    )
}


export default Routes;