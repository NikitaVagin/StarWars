import React from 'react';
import './item-list.css';


 const ItemList  = (props) => { 
    const {data} = props;
    const items = data.map((item) => {
        const {id} = item;
        const label = props.children(item)
        return(
            <li key={id} 
            className='list-group-item'
            onClick={() => props.onitemSelected(id)}>{label}</li>
        )
    })
        return (<ul className='item-list list-group item-list-star-db'>
            {items}
        </ul>)
    }
export default ItemList;