import React from 'react';
import RowBlock from '../row-block/';
import {PlanetList, PlanetDetails} from '../sw-components/index';


export default class PlanetPage extends React.Component{
    state ={
        selectedItem: null
    }
    onItemSelected = (selectedItem) =>{
        this.setState({
            selectedItem
        })
    }
    render() {
        return(
            <RowBlock left ={<PlanetList onitemSelected={this.onItemSelected}/>} right={<PlanetDetails itemId={this.state.selectedItem}/>}/>
        )
    }
}   