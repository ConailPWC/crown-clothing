import './header.style.scss'
import { Link } from 'react-router-dom'
import {ReactComponent as Logo} from '../../Assests/crown.svg'
import { auth } from '../../Firebase/firebase.utils'

const Header = ({currentUser}) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/shopp'>
                CONTACT
            </Link>
            {
                currentUser ?
                <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                :
                <Link className='option' to='/signinup'>SIGN IN</Link>
            }

        </div>
    </div>
)

export default Header