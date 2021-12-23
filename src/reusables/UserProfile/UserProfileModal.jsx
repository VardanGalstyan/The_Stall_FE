import React, { useState } from 'react'
import { Modal, Button, Form, Col, Row } from 'react-bootstrap'
import Loader from 'react-loader-spinner'
import { IoAddSharp } from 'react-icons/io5'
import { VscError } from 'react-icons/vsc'
import { useHistory, useParams } from 'react-router-dom'
import { AiOutlineCheckCircle } from 'react-icons/ai'


function UserProfileModal(props) {

    const role = localStorage.getItem('role')
    const token = localStorage.getItem('token')
    const history = useHistory()
    const { id } = useParams()

    console.log(props.data);

    const initialState = {
        first_name: `${props.data && props.data.first_name}`,
        surname: props.data && props.data.surname,
        "contacts.email": props.data && props.data.contacts.email,
        "contacts.web": props.data && props.data.contacts.web,
        "contacts.phone": props.data && props.data.contacts.phone,
        "contacts.whatsApp": '',
        address: props.data && props.data.address,
        avatar: props.data && props.data.avatar,
        'address.street_name': props.data && props.data.location.formatted_address.split(',')[0],
        'address.city': props.data && props.data.location.formatted_address.split(',')[1],
        'address.country': props.data && props.data.location.formatted_address.split(',')[2],
    }


    const [isLoading, setIsLoading] = useState(false)
    const [image, setImage] = useState(null)
    const [imageNull, setImageNull] = useState(false)
    const [userProfile, setUserProfile] = useState(initialState)
    const [isDone, setIsDone] = useState(false)
    const [error, setError] = useState(null)



    const handleError = () => {
        if (imageNull) {
            setError(false)
            setImageNull(false)
        }
        else {
            setError(false)
            setUserProfile({ ...initialState })
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            if (imageNull) {
                if (image === null) {
                    setError(true)
                } else {
                    setIsLoading(true)
                    const formData = new FormData()
                    formData.append('avatar', image)
                    const res = await fetch(`${process.env.REACT_APP_BASE_URL}/${role}/me/avatar`, {
                        method: "POST",
                        body: formData,
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    })
                    if (res.ok) {
                        setIsLoading(false)
                        setIsDone(true)
                        setImageNull(false)
                        setUserProfile({ ...initialState })
                        props.onHide()
                        setTimeout(() => {
                            setImage(null)
                            setIsDone(false)
                        }, 200)
                    }
                }
            } else {
                setIsLoading(true)
                const response = await fetch(`${process.env.REACT_APP_BASE_URL}/${role}/${id}`, {
                    method: "PUT",
                    body: JSON.stringify({ ...userProfile }),
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                })
                if (response.ok) {
                    const data = await response.json()
                    const formData = new FormData()
                    formData.append('avatar', image)
                    const res = await fetch(`${process.env.REACT_APP_BASE_URL}/${role}/me/avatar`, {
                        method: "POST",
                        body: formData,
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    })
                    if (res.ok) {
                        setIsDone(true)
                        setIsLoading(false)
                        setUserProfile({ ...initialState })
                        props.handlefetch()
                        props.onHide()
                        setTimeout(() => {
                            setImage(null)
                            setIsDone(false)
                        }, 200)

                    } else {
                        setIsLoading(false)
                        setImageNull(true)
                        setError(true)
                    }
                } else {
                    setIsLoading(false)
                    setError(true)
                }
            }
        } catch (error) {
            history.push('/error')
            console.log(error);
        }
    }


    return (
        <Modal
            {...props}
            size="lg"
            aria- labelledby="contained-modal-title-vcenter"
            centered
            className='user-profile-modal'
        >
            <Modal.Header closeButton>
                <Modal.Title>
                    User Profile
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Col md={4} className='modal-avatar'>
                        {
                            props.data && props.data.avatar ?
                                <img src={props.data && props.data.avatar} alt="update-avatar" />
                                : <img src="https://autohaus-lemke.de/site/assets/files/1085/platzhalter-mann.jpg" alt="update-avatar" />

                        }
                        <div className='add-user-avatar'>
                            <input
                                type="file"
                                onChange={(e) => setImage(e.target.files[0])}
                            />
                            <IoAddSharp />
                        </div>
                    </Col>
                    <Col className='user-profile-modal-form'>
                        <Row>
                            <Form.Group as={Col}>
                                <Form.Control
                                    type="text"
                                    placeholder='First name'
                                    value={userProfile.first_name}
                                    onChange={(e) => setUserProfile({ ...userProfile, first_name: e.target.value })}
                                />
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Control
                                    type="text"
                                    placeholder='surname'
                                    value={userProfile.surname}
                                    onChange={(e) => setUserProfile({ ...userProfile, surname: e.target.value })}
                                />
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group as={Col}>
                                <Form.Control
                                    type='phone'
                                    placeholder='Phone'
                                    value={userProfile["contacts.phone"]}
                                    onChange={(e) => setUserProfile({ ...userProfile, ["contacts.phone"]: e.target.value })}
                                />
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Control
                                    type='phone'
                                    placeholder='WhatsApp'
                                    value={userProfile["contacts.whatsApp"]}
                                    onChange={(e) => setUserProfile({ ...userProfile, ["contacts.whatsApp"]: e.target.value })}
                                />
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group as={Col}>
                                <Form.Control
                                    type='text'
                                    placeholder='Web'
                                    value={userProfile["contacts.web"]}
                                    onChange={(e) => setUserProfile({ ...userProfile, ["contacts.web"]: e.target.value })}
                                />
                            </Form.Group>
                            <Form.Group as={Col} md={7}>
                                <Form.Control
                                    type='email'
                                    placeholder='E-mail'
                                    value={userProfile["contacts.email"]}
                                    onChange={(e) => setUserProfile({ ...userProfile, ["contacts.email"]: e.target.value })}
                                />
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group as={Col} md={5}>
                                <Form.Control
                                    type='text'
                                    placeholder='Street'
                                    value={userProfile["address.street_name"]}
                                    onChange={(e) => setUserProfile({ ...userProfile, ["address.street_name"]: e.target.value })}
                                />
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Control
                                    type='text'
                                    placeholder='City'
                                    value={userProfile["address.city"]}
                                    onChange={(e) => setUserProfile({ ...userProfile, ["address.city"]: e.target.value })}
                                />
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Control
                                    type='text'
                                    placeholder='Country'
                                    value={userProfile["address.country"]}
                                    onChange={(e) => setUserProfile({ ...userProfile, ["address.country"]: e.target.value })}
                                />
                            </Form.Group>
                        </Row>
                        {
                            isLoading ? <Loader type='ThreeDots' width={15} /> :
                                error ?
                                    <div className='incorrectCredentials'>
                                        {
                                            imageNull ?
                                                <span> Want to add avatar?
                                                    <span onClick={handleError}><AiOutlineCheckCircle /></span>
                                                    <span
                                                        onClick={() => {
                                                            props.onHide()
                                                            setUserProfile({ ...initialState })
                                                        }}
                                                    >
                                                        <VscError />
                                                    </span>
                                                </span>
                                                : <span>Missing credentials <span><VscError onClick={handleError} /></span></span>
                                        }
                                    </div>
                                    :
                                    <Button className='form-button' variant="primary" type="submit">
                                        {
                                            !isDone ? "Submit" : "Done"
                                        }
                                    </Button>
                        }
                    </Col>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => {
                    props.onHide()
                    setUserProfile({ ...initialState })
                    setImageNull(false)
                    setError(false)
                }}>Close</Button>
            </Modal.Footer>
        </Modal >
    )
}

export default UserProfileModal
