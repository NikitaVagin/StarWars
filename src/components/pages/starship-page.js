import React from 'react';
import {StarshipList} from '../sw-components/index';
import {withRouter} from 'react-router-dom';


const StarshipPage = ({ history }) =>{
        return(
            <StarshipList onitemSelected={(itemId) =>  history.push(itemId)}/>
        )
};   

export default withRouter(StarshipPage);