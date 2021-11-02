import React from 'react'
import { Row, Col } from 'react-bootstrap'

function Cover() {
    return (
        <Row className="main-header">
            <Col className="cover">
                <div>
                    <img
                        src="https://picsum.photos/1000/400"
                        alt="profile background"
                    />
                </div>
            </Col>
        </Row>
    )
}

export default Cover
