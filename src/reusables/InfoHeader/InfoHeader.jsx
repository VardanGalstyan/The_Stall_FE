import React from 'react'

function InfoHeader({ boxes, horses }) {
    return (
        <div className='profile-container'>
            <div className='profile-container-title'>
                <span>Properties</span>
            </div>
            <div className='body-properties-header'>
                <div className='properties-boxes'>
                    <div className='property-items'>
                        <span className='properties-title'>Boxes</span>
                        <span className='property-value'>{`${horses && boxes - horses.length}/${boxes}`}</span>
                    </div>
                </div>
                <div className='properties-boxes'>
                    <div className='property-items'>
                        <span className='properties-title'>Horses</span>
                        <span className='property-value'>{horses && horses.length}</span>
                    </div>
                </div>
                <div className='properties-boxes'>
                    <div className='property-items'>
                        <span className='properties-title'>Horse Owners</span>
                        <span className='property-value'>16</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoHeader
