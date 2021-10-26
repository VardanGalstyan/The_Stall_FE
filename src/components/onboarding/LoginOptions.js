import React from 'react'
import { Col, Button } from 'react-bootstrap'
import '../../Styles/css/onboarding.css'
import { useHistory } from 'react-router-dom'


function LoginOptions() {
    const history = useHistory()

    return (
        <Col id='loginOptions' md={6}>
            <h1 className='theStable'>THE STABLE</h1>
            <div>
                <Button onClick={() => history.push('/login')}> LOG IN </Button>
                <Button onClick={() => history.push('/register')}>SING UP</Button>
            </div>
        </Col >
    )
}

export default LoginOptions
