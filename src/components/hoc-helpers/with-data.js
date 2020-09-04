import React from 'react'
import Spinner from '../spinner'
import ErrorBoundry from '../error-boundry/error-boundry'

const withData = (View) => {
    return class extends React.Component{
        state ={
            data: []
        }
        componentDidMount(){
            this.update();
    
        }
        update() {
            this.props.getData()
            .then((data) =>{
               this.setState({
                data
               })
            })
        }
        componentDidUpdate(prevProps) {
            if(this.props.getData !== prevProps.getData){
                this.update();
            }
        }

        render(){
            const {data} = this.state;
            if(this.state.data.length === 0){
                return <div className='center-position'><Spinner/></div>
            }
            return(
                 <ErrorBoundry>
                    <View {...this.props} data={data}/>
                </ErrorBoundry>
            )
        }
    }
}

export default withData;