import React from 'react'
import './style/stable.css'
import StableHeader from './Header/StableHeader'
import Feed from '../Navbar/Feed'
import StableBody from './Body/StableBody'

function Stable() {
    return (
        <div id='stable'>
            <Feed />
            <StableHeader />
            <StableBody />
        </div>
    )
}

export default Stable
