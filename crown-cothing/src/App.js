import React from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';


import './App.css'

import Header from './Commponents/header/header.commponent';
import HomePage from './Pages/homepage/homepage.commponent'
import ShopPage from './Pages/shoppage/shoppage.commponent';
import CheckoutPage from './Pages/checkoutpage/checkoutpage.commponet';
import SignInUpPage from './Pages/signinpage/sign-inpage.commponent';
import { auth, createUserProfileDocument } from './Firebase/firebase.utils';
import {setCurrentUser} from './redux/user/user.actions'
import { selectCurrentUser } from './redux/user/user.selector';
import { createStructuredSelector } from 'reselect';

class App extends React.Component {

  unsubscribeFromAuth = null

  componentDidMount() {
    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser ({
              id: snapShot.id,
              ...snapShot.data()
            });
          });
      }
      else {
        setCurrentUser(userAuth)
      }

    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }


  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route excat path='/signinup' render={() => this.props.currentUser ? (<Redirect to='/'/>) : (<SignInUpPage/>)}/>
          <Route path='/checkout' component={CheckoutPage}/>
        </Switch>
        
      </div>
    );
  }
}

const mapStateToProps =  createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps )(App);
