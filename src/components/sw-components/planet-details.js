import React from 'react';
import ItemDetalis, {Record} from '../item-details';
import {withSwapiService}  from '../hoc-helpers';

const PlanetDetails = (props) => {
    return(
                     <ItemDetalis {...props}>
                         <Record  field='diameter' label='Diameter:' />
                         <Record  field='population' label='Population:'/>
                         <Record  field='RotationPeriod' label='Rotation Period:'/>
                     </ItemDetalis>
           )
 }

 const mapMethodToProps = (swapiService) => {
    return {
        getData: swapiService.getPlanet,
        getImageUrl: swapiService.getPlanetImage
    }
}
 export default withSwapiService(PlanetDetails, mapMethodToProps);