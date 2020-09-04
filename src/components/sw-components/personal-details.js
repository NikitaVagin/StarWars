import React from 'react';
import ItemDetalis, {Record} from '../item-details';
import {withSwapiService}  from '../hoc-helpers';


const PersonalDetails = (props) => {
    return(
        <ItemDetalis {...props}>
            <Record  field='skinColor' label='Skin Color:' />
            <Record  field='gender' label='Gender:'/>
            <Record  field='birthYear' label='Birth Year:'/>
            <Record  field='eyeColor' label='Eye Color:'/>
        </ItemDetalis>
            )
}    

const mapMethodToProps = (swapiService) => {
    return {
        getData: swapiService.getPerson,
        getImageUrl: swapiService.getPersonImage
    }
}

export default withSwapiService(PersonalDetails, mapMethodToProps);