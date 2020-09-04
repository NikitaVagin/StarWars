import React from 'react';
import './item-details.css';
import Spinner from '../spinner';



const Record = ({item, field, label}) =>{
    return(
        <li>
            <span>{label}</span>
             <span>{item[field]}</span>
        </li>
    )
}
export {
    Record
};

export default class ItemDetalis extends React.Component{

    state = {
        image: null,
        item: null,
        loading: false
    }
    componentDidMount(){
        this.updateItem();
    }
    updateItem(){
        const {itemId, getData, getImageUrl} = this.props;
        if(!itemId){
            return;
        }
        getData(itemId)
            .then((item) =>{
                this.setState({item, loading: false, image: getImageUrl(item)})
            })
    }
    componentDidUpdate(prevProps){
        console.log(this.props);
        if(this.props.itemId !== prevProps.itemId || this.props.getData !== prevProps.getData || this.props.getImageUrl !== prevProps.getImageUrl){
            this.setState({
                loading: true
            })
            this.updateItem();
        }
    }
    render(){
    const {item, loading, image} = this.state;
    let children = React.Children.map(this.props.children, (child) =>{
            return React.cloneElement(child, {item})
    });
    const spanSelect = !item && !loading ? <span className='blockquote text-center'> Select a person from a list</span> : null
    const itemView = item && !loading ? <ItemView person={item} image={image} children={children}/> : null
    const spinner = loading ? <Spinner/> : null
    
    return (
        <React.Fragment>
            {spanSelect}
            {spinner}
            {itemView}
        </React.Fragment>
    )

    }
}
    const ItemView = ({person, image, children}) => {
    const {name} = person;

        return(
            <div className='container-details d-flex'>
                <div className='img-fluid details-image' style={{backgroundImage: 'url(' + image + ')'}}></div>
                 <div className='details-information-ul'>
                    <h4>{name}</h4>
                    <ul>
                        {children}
                    </ul>
                </div>
            </div>
            )
    }