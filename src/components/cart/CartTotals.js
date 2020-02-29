import React from 'react'
import { Link } from 'react-router-dom';
import PayPalButton from './PayPalButton';

export default function CartTotals({value,history}) {
    const{cartSubTotal,cartTax,cartTotal,clearCart} = value;
    return (
        <React.Fragment>
            <div className='container'>
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                        <Link to='/'>
                            <button className='btn btn-outline-danger text-uppercase mb-3 px-5'
                            type='button'
                            onClick={() => clearCart()}>
                            очистить корзину</button>
                        </Link>
                        <h5>
                            <span className="text-title">промежуточный итог :</span>
                            <strong>₽ {cartSubTotal}</strong>
                        </h5>
                        <h5>
                            <span className="text-title">налог :</span>
                            <strong>₽ {cartTax}</strong>
                        </h5>
                        <h5>
                            <span className="text-title">итого :</span>
                            <strong>₽ {cartTotal}</strong>
                        </h5>
                        <PayPalButton total={cartTotal} clearCart={clearCart} history={history}> </PayPalButton>
                    </div>
                </div>
            </div>
            
        </React.Fragment>
    )
}
