import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setCustumer as setStoreCustomer } from '../../store/modules/shop/actions'
import Header from '../../components/header';
import { Link } from 'react-router-dom'

const Cadastro = () => {

    const dispatch = useDispatch()

    const [costumer, setCostumer] = useState({
       external_id: new Date().getTime().toString(),
       name: '',
       type: 'individual',
       country: 'br',
       email: '',
       documents: [
           {
               type: 'cpf',
               number: '',
           },
       ] ,
       phone_numbers: [''],
       birthday: '',
    })

    const goToCheckout = () => {
       dispatch(setStoreCustomer(costumer))
    }

    return(
        <div className="container-fluid h-100 bg-primary">
            <Header whiteVersion hideCart/>
            <div className="row">
            <div className="col-4 text-right my-auto">  
            </div>
            <div className="col-6">
                <div className="box col-8">
                    <h2 className="text-center">Falta pouco para você realizar a sua compra</h2>
                    <br></br>
                    <br></br>
                    <input type="text" className="form-control form-control-lg mb-3" placeholder="Nome Completo" onChange={(e) => {setCostumer({...costumer, name: e.target.value})}}/>
                    <input type="text" className="form-control form-control-lg mb-3" placeholder="E-mail" onChange={(e) => {setCostumer({...costumer, email: e.target.value})}}/>
                    <input type="text" className="form-control form-control-lg mb-3" placeholder="Telefone" onChange={(e) => {setCostumer({...costumer, phone_numbers: e.target.value})}}/>
                    <input type="text" className="form-control form-control-lg mb-3" placeholder="CPF" onChange={(e) => {setCostumer({...costumer, documents: [{type: 'cpf', number: e.target.value}]})}}/>
                    <input type="date" className="form-control form-control-lg mb-3" placeholder="Data de Nascimento" onChange={(e) => {setCostumer({...costumer, birthday: e.target.value})}}/>
                    <Link to = '/home'><button onClick={() => goToCheckout()} className="btn btn-lg btn-block btn-secondary">Finalizar Pedido</button></Link>
                </div>
            </div>
            </div>  
        </div>
    )
}

export default Cadastro