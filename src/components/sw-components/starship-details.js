import React from 'react';
import ItemDetalis, {Record} from '../item-details';
import {withSwapiService}  from '../hoc-helpers';

const StarshipDetails = (props) => {
         return(
         <ItemDetalis {...props}>
             <Record  field='cargoCapaciry' label='Сargo Capaciry:' />
             <Record  field='length' label='Length:'/>
             <Record  field='starshopClass' label='Starshop Class:'/>
         </ItemDetalis>
                 )
 }

 const mapMethodToProps = (swapiService) => {
    return {
        getData: swapiService.getStarship,
        getImageUrl: swapiService.getStarshipImage
    }
}

 export default withSwapiService(StarshipDetails, mapMethodToProps);