import React, { useState } from 'react'
import Loader from 'react-loader-spinner'
import validator from 'validator'
import { Modal, Form, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { VscError } from 'react-icons/vsc'
import '../Styles/onboarding.css'

function LoginModal(props) {

    const initialState = {
        email: '',
        password: ''
    }

    const history = useHistory()
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const [role, setRole] = useState('')
    const [user, setUser] = useState(initialState)
    const validEmail = validator.isEmail(user.email)

    const handleError = () => {
        setIsError(false)
        setUser(initialState)
        setRole(false)
    }

    const handleClose = () => {
        props.onHide()
        setUser(initialState)
        setRole(false)
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
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            id='onboarding-modal'
        >
            <Modal.Header closeButton onClick={handleClose}>
                <Modal.Title id="contained-modal-title-vcenter">
                    LOG IN
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Control
                            isValid={validEmail}
                            required
                            type="email"
                            placeholder="Enter email"
                            value={user.email}
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
                    {!isError &&
                        <div className='SignUpButton'>
                            {
                                validEmail && (role !== false && role !== '') && !isError ?
                                    <Button className='dataIsReady' type="submit"> Go! </Button> :
                                    (user.email.length > 1 || user.password.length > 1) && !isError ?
                                        <Button className='fillingDataIn'>
                                            <Loader type="ThreeDots" color="#ffcc56" height={25} width={25} />
                                        </Button> :
                                        <Button className='invisible'> CANCEL </Button>
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

export default LoginModal
