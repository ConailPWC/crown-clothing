import React from 'react';
import { Route, Switch} from 'react-router-dom';
import './App.css'
import Header from './Commponents/header/header.commponent';
import HomePage from './Pages/homepage/homepage.commponent'
import ShopPage from './Pages/shoppage/shoppage.commponent';
import SignInUpPage from './Pages/signinpage/sign-inpage.commponent';
import { auth, createUserProfileDocument } from './Firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
          console.log(this.state);
        });
      }
      else {
        this.setState({currentUser: userAuth})
      }

    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }


  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route path='/signinup' component={SignInUpPage}/>
        </Switch>
        
      </div>
    );
  }
}

export default App;
