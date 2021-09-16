import './checkoutpage.style.scss'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import { selectCartTotal } from '../../redux/cart/cart.selectors'

import CheckoutItem from '../../Commponents/checkout-item/checkout-item.commponent'



const CheckoutPage = ({cartItems, total}) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price(Individually)</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map( cartItem => 
                <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
            )
        }
        <div className='total'>
            <span>TOTAL: £{total}</span>
        </div>
    </div>
)

const maptStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})



export default connect(maptStateToProps)(CheckoutPage);