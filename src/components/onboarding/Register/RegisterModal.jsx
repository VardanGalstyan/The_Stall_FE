import React, { useState } from 'react'
import Loader from 'react-loader-spinner'
import validator from 'validator'
import { VscError } from 'react-icons/vsc'
import '../Styles/onboarding.css'
import { useHistory } from 'react-router'
import { Modal, Button, Form } from 'react-bootstrap'


function RegisterModal(props) {

    const initialState = {
        first_name: "",
        surname: "",
        "contacts.email": "",
        password: ""
    }

    const history = useHistory()
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(true)
    const [role, setRole] = useState('')
    const [validated, setValidated] = useState(false)
    const [user, setUser] = useState(initialState)

    const validEmail = validator.isEmail(user['contacts.email'])
    // const validPassword = validator.isStrongPassword(user.password)
    const validPassword = user.password.length >= 4
    const validFirstName = user.first_name.length >= 2
    const validSurname = user.surname.length >= 2

    const handleClose = () => {
        props.onHide()
        setUser(initialState)
    }

    const handleError = () => {
        setIsError(false)
        setUser(initialState)
        setRole(false)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (validEmail && validFirstName && validSurname && role) {
            setValidated(true)
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
                    localStorage.setItem('user', data._id)
                    setTimeout(() => {
                        history.push(`/${role}`)
                        setIsLoading(false)
                        setValidated(false)
                    }, 1000)
                } else {
                    setIsError(true)
                    setIsLoading(false)
                }
            } catch (error) {
                console.log(error.response);
            }
        }
    }


    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            id='onboarding-modal'
        >
            <Modal.Header closeButton onClick={handleClose}>
                <Modal.Title id="contained-modal-title-vcenter">
                    SIGN UP
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
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
                            <option value={false}></option>
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
                            value={user['contacts.email']}
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
                        {/* <Form.Text id="passwordHelpInline" muted>
                            Must be 8-20 characters long.
                        </Form.Text> */}
                    </Form.Group>
                    {
                        isError &&
                        <div className='incorrectCredentials'>
                            <span>Credentials are Incorrect</span>
                            <span><VscError onClick={handleError} /></span>
                        </div>
                    }
                    {!isError &&
                        <div className='SignUpButton'>
                            {
                                validFirstName && validSurname && validEmail && role && !isError ?
                                    <Button className='formButton dataIsReady' type="submit"> Join! </Button> :
                                    (user.first_name.length > 1 || user.surname.length > 1) && !isError ?
                                        <Button className='formButton fillingDataIn' type="submit">
                                            <Loader type="ThreeDots" color="#ffcc56" height={25} width={25} />
                                        </Button> :
                                        <Button className='formButton invisible' type="submit"> CANCEL </Button>
                            }
                        </div>
                    }
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={handleClose}>Cancel</Button>
            </Modal.Footer>
        </Modal >
    )
}

export default RegisterModal
