import React, { useState } from 'react'
import { Col, Form, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { VscError } from 'react-icons/vsc'
import Loader from '../../utils/Loader'

function Login() {
    const history = useHistory()
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const [role, setRole] = useState('')
    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const handleError = () => {
        setIsError(false)
        setUser({
            email: "",
            password: ""
        })
    }


    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            setIsLoading(true)
            const response = await fetch(`http://localhost:3001/${role}/login`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });
            if (response.ok) {
                const data = await response.json()
                localStorage.setItem('token', data.accessToken)
                localStorage.setItem('role', role)
                setTimeout(() => {
                    history.push(`/${role}`)
                    setIsLoading(false)
                }, 300)
            } else {
                setIsLoading(false)
                setIsError(true)
            }
        } catch (error) {
            console.log(error.response);
        }

    }


    return (
        <div className='loginOptions'> {
            isLoading ? <Loader /> :
                <Col id='login' md={6}>
                    <div>
                        <h1 className='theStable'>THE STABLE</h1>
                    </div>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Control
                                required
                                type="email"
                                placeholder="Enter email"
                                value={user['contacts.email']}
                                onChange={(e) => setUser({ ...user, email: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control
                                required
                                type="password"
                                placeholder="Password"
                                value={user.password}
                                onChange={(e) => setUser({ ...user, password: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control
                                required
                                as="select"
                                onChange={e => setRole(e.target.value)}
                            >
                                <option value={false}>Select the Role</option>
                                <option value='horseOwner'>Horse Owner</option>
                                <option value='rider'>Rider</option>
                                <option value='stableOwner'>Stable Owner</option>
                            </Form.Control>
                        </Form.Group>
                        {
                            isError &&
                            <div className='incorrectCredentials'>
                                <span>Credentials are Incorrect</span>
                                <span><VscError onClick={handleError} /></span>
                            </div>
                        }
                        <Button className='formButton' type="submit">
                            Log in
                        </Button>
                    </Form>
                </Col>
        }
        </div>
    )
}

export default Login
