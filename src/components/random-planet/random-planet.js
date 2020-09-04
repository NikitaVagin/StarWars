import React from 'react';
import './random-planet.css';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator/error-indicator';


class RandomPlanet extends React.Component{
    swapiServive = new SwapiService ();
    state = {
        planet: {},
        loading: true,
        error: false
    }
    componentDidMount(){
        this.updatePlanet();
    }
    onError = (err) =>{
        this.setState({
            error: true,
            loading: false
        })
    }
    onPlanetLoaded = (planet) =>{
        this.setState({planet, loading: false});
    }
    updatePlanet = () => {
        const id = Math.floor(Math.random()*10 + 2);
        this.swapiServive.getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError);
    }


    render(){
    const {planet, loading, error } = this.state;
    const spinner = loading ? <div className='center-position'><Spinner/></div> : null;
    const content =  !(loading || error) ? <PlanetView planet={planet}/> : null;
    const errorIndicator = error ? <ErrorIndicator/> : null;

    return (
        <div className='container-random-planet d-flex'>
            {spinner}
            {content}
            {errorIndicator}
        </div>
    )
    }
}

const PlanetView = ({planet}) =>{

    const {population, rotationPeriod, diameter, name, id } = planet;
    return(
        <React.Fragment>
            <div>
                <img className='img-fluid planet-image' src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt={name}/>
            </div>
            <div className='planet-information-ul'>
                <h3>{name}</h3>
                <ul>
                    <li >
                        <span>Population:</span>
                    <span>{population}</span>
                    </li>
                    <li>
                        <span>Rotaion period:</span>
                        <span>{rotationPeriod}</span>
                    </li>
                    <li>
                        <span>Diameter:</span>
                        <span>{diameter}</span>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    );
}
export default RandomPlanet;