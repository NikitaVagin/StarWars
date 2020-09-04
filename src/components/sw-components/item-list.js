import React from 'react'
import ItemList from '../item-list';
import {withData, withSwapiService} from '../hoc-helpers/';


const withChildFunction = (Wrapped, fn) => {
    return (props) => {
        return(
            <Wrapped {...props}>
                {fn}
            </Wrapped>
        )
    }
};

const mapPersonMethodToProps = (swapiService) =>{
    return {
        getData: swapiService.getAllPeople
    }
}

const mapPlanetMethodToProps = (swapiService) =>{
    return {
        getData: swapiService.getAllPlanets
    }
}

const mapStarshipMethodToProps = (swapiService) =>{
    return {
        getData: swapiService.getAllStarships
    }
}


const PersonalList = withSwapiService(withData(withChildFunction (ItemList, (i) => i.name)), mapPersonMethodToProps);
const PlanetList =  withSwapiService(withData(withChildFunction (ItemList, (i) => i.name)), mapPlanetMethodToProps);
const StarshipList =  withSwapiService(withData(withChildFunction (ItemList, (i) => i.name)), mapStarshipMethodToProps );

export {
    PersonalList,
    PlanetList,
    StarshipList
}