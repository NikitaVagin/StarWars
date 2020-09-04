import React, {useState} from 'react';
import RowBlock from '../row-block/';
import {PersonalList, PersonalDetails} from '../sw-components/index';
import {withRouter} from 'react-router-dom';

const PeoplePage = () =>{
        const [selectedItem, setSelectedItem] = useState(null);
        return(
            <>
            <h2>People</h2>
            <RowBlock left ={<PersonalList onitemSelected={(id) => setSelectedItem(id)}/>} right={<PersonalDetails itemId={selectedItem}/>}/>
            </>
        )
}   

export default withRouter(PeoplePage);