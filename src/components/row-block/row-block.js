import React from 'react';

const RowBlock = ({left, right}) => {
    return (
        <div className='row mb2 row-item-list'>
            <div className='col-md-6 d-flex'>
            {left}
            </div>
            <div className='col-md-6 d-flex justify-content-center'>
            {right}
            </div>
        </div>
    )
}

export default RowBlock;