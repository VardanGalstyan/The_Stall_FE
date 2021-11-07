import React from 'react'
import { Row, Col } from 'react-bootstrap'

function Cover() {
    return (
        <Row className="main-header">
            <Col className="cover">
                <div>
                    <img
                        src="https://wallpaperaccess.com/full/4881447.jpg"
                        alt="profile background"
                    />
                </div>
            </Col>
        </Row>
    )
}

export default Cover
