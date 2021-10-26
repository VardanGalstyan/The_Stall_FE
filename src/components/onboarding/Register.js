import React, { useState } from 'react'
import { Col, Form, Button } from 'react-bootstrap'
import validator from 'validator'
import { useHistory } from 'react-router'
import Loader from '../../utils/Loader'

function Register() {
    const history = useHistory()
    const [isLoading, setIsLoading] = useState(false)
    const [role, setRole] = useState('')
    const [user, setUser] = useState({
        first_name: "",
        surname: "",
        "contacts.email": "",
        password: ""
    })

    const validEmail = validator.isEmail(user['contacts.email'])
    // const validPassword = validator.isStrongPassword(user['contacts.email'])
    const validPassword = user.password.length >= 4
    const validFirstName = user.first_name.length >= 2
    const validSurname = user.surname.length >= 2

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (validEmail && validFirstName && validSurname && role) {
            try {
                setIsLoading(true)
                const response = await fetch(`http://localhost:3001/${role}/register`, {
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
                        history.push('/RiderHome')
                        setIsLoading(false)
                    }, 1000)
                } else {
                    alert('something went wrong')
                }
            } catch (error) {
                console.log(error.response);
            }
        }
    }

    return (
        <>  {
            isLoading ? <Loader /> :
                <Col id='register' md={6}>
                    <div>
                        <h1 className='theStable'>THE STALL</h1>
                    </div>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Control
                                required
                                isValid={validFirstName}
                                type="text"
                                placeholder="First name"
                                value={user.first_name}
                                onChange={(e) => setUser({ ...user, first_name: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control
                                required
                                isValid={validSurname}
                                type="text"
                                placeholder="Surname"
                                value={user.surname}
                                onChange={(e) => setUser({ ...user, surname: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control
                                as="select"
                                onChange={e => setRole(e.target.value)}
                            >
                                <option value={false}>Select the Role</option>
                                <option value='horseOwner'>Horse Owner</option>
                                <option value='rider'>Rider</option>
                                <option value='stableOwner'>Stable Owner</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control
                                required
                                isValid={validEmail}
                                type="email"
                                placeholder="Enter email"
                                value={user.email}
                                onChange={(e) => setUser({ ...user, "contacts.email": e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control
                                required
                                isValid={validPassword}
                                type="password"
                                placeholder="Password"
                                value={user.password}
                                onChange={(e) => setUser({ ...user, password: e.target.value })}
                            />
                            <Form.Text id="passwordHelpInline" muted>
                                Must be 8-20 characters long.
                            </Form.Text>
                        </Form.Group>
                        <Button className='formButton' type="submit">
                            SIGN UP
                        </Button>
                    </Form>
                </Col>
        }
        </>
    )
}

// export default withRouter(Register)
export default Register
