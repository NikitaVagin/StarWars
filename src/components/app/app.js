import React from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import './app.css';
import SwapiService from '../../services/swapi-service';
import DummySwapiService from '../../services/dummy-swapi-service'
import ErrorBoundry from '../error-boundry/error-boundry'
import {SwapiServiceProvider} from '../swapi-service-context'
import {PeoplePage, StarshipPage, PlanetPage, SecretPage, LoginPage} from '../pages';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import {StarshipDetails} from '../sw-components/index';

export default class App extends React.Component{

    state = {
        selectedItem: null,
        swapeService: new SwapiService(),
        isLoggedIn: false
    }

    onServiceChange = () =>{
        this.setState(({swapeService}) =>{
            const Servive = swapeService instanceof SwapiService ? DummySwapiService : SwapiService;
            return {
                swapeService: new Servive()
            }
        })
    }
    componentDidCatch() {
        console.log('Compoinetns fffff')
        this.setState({hasError: true})
    }
    onLogin = () =>{
        this.setState({
            isLoggedIn: true
        })
    }
    render(){
        const {isLoggedIn} = this.state;
        return(
        <ErrorBoundry>
            <SwapiServiceProvider value={this.state.swapeService}>
                <Router>
                    <div className='star-db-app'>
                        <Header onServiceChange={this.onServiceChange}/>
                        <RandomPlanet />
                        <Switch>
                            <Route path='/' render={() => <h2>Welcome to StarDB</h2>} exact={true}/>
                            <Route path='/people' component={PeoplePage}/>
                            <Route path='/planets' component={PlanetPage}/>
                            <Route path='/starships' component={StarshipPage} exact/>
                            <Route path='/starships/:id' render={({match}) => {
                                const {id} = match.params
                                return <StarshipDetails itemId={id}/>
                            }
                            }/>
                            <Route path="/login" render={() => (
                                <LoginPage isLoginIn={isLoggedIn} onLogin={this.onLogin}/>
                            )}/>
                            <Route path="/secret" render={() =>(
                                <SecretPage isLoginIn={isLoggedIn}/>
                            )}/>
                            <Route render={() => <h2>Page not found!</h2>}/>
                        </Switch>
                    </div>
                </Router>
            </SwapiServiceProvider>
        </ErrorBoundry>
        )
    }

}