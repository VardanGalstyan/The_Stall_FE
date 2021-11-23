import React from 'react'
import { Col, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'


function LoginOptions() {
    const history = useHistory()

    return (
        <div className='loginOptions'>
            <Col md={6}>
                <h1 className='theStable'>THE STABLE</h1>
                <div>
                    <Button onClick={() => history.push('/login')}> LOG IN </Button>
                    <Button onClick={() => history.push('/register')}>SING UP</Button>
                </div>
            </Col >
        </div>
    )
}

export default LoginOptions
