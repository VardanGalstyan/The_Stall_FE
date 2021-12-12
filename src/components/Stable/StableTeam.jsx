import React from 'react'
import { Col } from 'react-bootstrap'

function StableTeam() {
    return (
        <Col className='single-team-member'>
            <div className='single-team-member-avatar'>
                <img src="https://picsum.photos/200/300" alt="team-member-1" />
            </div>
            <div className='single-team-member-details'>
                <span className='member-name'>John Doe</span>
                <span className='member-position'>CEO</span>
            </div>
        </Col>
    )
}

export default StableTeam
