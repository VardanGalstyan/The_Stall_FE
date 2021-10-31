import React, { useState } from 'react'
import { Row, Col, Form, Button, Modal } from 'react-bootstrap'
import { VscError } from 'react-icons/vsc'
import { IoAddSharp } from 'react-icons/io5'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import { useHistory } from 'react-router'
import Loader from 'react-js-loader'


function StableOwnerModal(props) {

    const initialState = {
        stable_name: "",
        "address.street_name": "",
        "address.city": "",
        "address.country": "",
        number_of_boxes: "",
        services: "",
        facilities: "",
        avatar: "",
        description: "",
        "contacts.phone": "",
        "contacts.web": "",
        "contacts.email": "",
    }

    const history = useHistory()
    const token = localStorage.getItem('token')
    const [image, setImage] = useState(null)
    const [imageNull, setImageNull] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [isDone, setIsDone] = useState(false)
    const [error, setError] = useState(false)
    const [stable, setStable] = useState(initialState)
    const [id, setId] = useState('')



    const handleError = () => imageNull ? setError(false) : setError(false) && setStable({ ...initialState })

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
                    const res = await fetch(`http://localhost:3001/stableowner/me/stable/${id}/avatar`, {
                        method: "POST",
                        body: formData,
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    })
                    if (res.ok) {
                        setIsLoading(false)
                        setIsDone(true)
                        setId('')
                        setImageNull(false)
                        setStable({ ...initialState })
                        props.onHide()
                        setTimeout(() => {
                            setImage(null)
                            setIsDone(false)
                        }, 200)
                    }
                }
            } else {
                setIsLoading(true)
                const response = await fetch(`http://localhost:3001/stableowner/me/stable`, {
                    method: "POST",
                    body: JSON.stringify(stable),
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                })
                if (response.ok) {
                    const data = await response.json()
                    setId(data._id)
                    const formData = new FormData()
                    formData.append('avatar', image)
                    const res = await fetch(`http://localhost:3001/stableowner/me/stable/${data._id}/avatar`, {
                        method: "POST",
                        body: formData,
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    })
                    if (res.ok) {
                        setIsDone(true)
                        setIsLoading(false)
                        setStable({ ...initialState })
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
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className='addHorsesModal'
        >
            <Modal.Header closeButton>
                <Modal.Title>
                    Create a Stable
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Row className='align-items-center'>
                        <Col lg={4} className='mb-4 modalLogo'>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOPyfvJRS9c3YymVIXifqqFXQ2eMDNfZjhMw&usqp=CAU" alt="updateImage" />
                            <div className='addHorseImage'>
                                <input
                                    type="file"
                                    className='inputImage'
                                    onChange={(e) => setImage(e.target.files[0])}
                                />
                                <IoAddSharp />
                            </div>
                        </Col>
                        <Col>
                            <Row>
                                <Form.Group as={Col} md={12}>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Stable name"
                                        value={stable.stable_name}
                                        onChange={(e) => setStable({ ...stable, stable_name: e.target.value })}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} md={6}>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Street"
                                        value={stable['address.street_name']}
                                        onChange={(e) => setStable({ ...stable, 'address.street_name': e.target.value })}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} md={3}>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="City"
                                        value={stable['address.city']}
                                        onChange={(e) => setStable({ ...stable, 'address.city': e.target.value })}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} md={3}>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Country"
                                        value={stable['address.country']}
                                        onChange={(e) => setStable({ ...stable, 'address.country': e.target.value })}
                                    />
                                </Form.Group>
                            </Row>
                            <Row>
                                <Form.Group as={Col} md={3}>
                                    <Form.Control
                                        required
                                        type="number"
                                        min='1'
                                        max='100'
                                        placeholder="Boxes"
                                        value={stable.number_of_boxes}
                                        onChange={(e) => setStable({ ...stable, number_of_boxes: e.target.value })}
                                    />
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Services | Multiple Choice"
                                        value={stable.services}
                                        onChange={(e) => setStable({ ...stable, services: e.target.value })}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} md={12}>
                                    <Form.Control
                                        required
                                        as='select'
                                        placeholder="Facilities | Multiple Choice"
                                        value={stable.facilities}
                                        onChange={(e) => setStable({ ...stable, facilities: e.target.value })}
                                    >
                                        <option value='mare'>Mare</option>
                                        <option value='stallion'>Stallion</option>
                                        <option value='gelding'>Gelding</option>
                                    </Form.Control>
                                </Form.Group>
                            </Row>
                            <Row>
                                <Form.Group as={Col}>
                                    <Form.Control
                                        required
                                        type="email"
                                        placeholder="Email"
                                        value={stable['contacts.email']}
                                        onChange={(e) => setStable({ ...stable, 'contacts.email': e.target.value })}
                                    />
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Control
                                        type="phone"
                                        placeholder="Phone"
                                        value={stable['contacts.phone']}
                                        onChange={(e) => setStable({ ...stable, 'contacts.phone': e.target.value })}
                                    />
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Control
                                        type="text"
                                        placeholder="Web"
                                        value={stable['contacts.web']}
                                        onChange={(e) => setStable({ ...stable, 'contacts.web': e.target.value })}
                                    />
                                </Form.Group>
                            </Row>
                            <Form.Group as={Col}>
                                <Form.Control
                                    required
                                    as='textarea'
                                    style={{ height: '100px' }}
                                    type="textarea"
                                    placeholder="Description"
                                    value={stable.description}
                                    onChange={(e) => setStable({ ...stable, description: e.target.value })}
                                />
                            </Form.Group>
                            {
                                isLoading ? <Loader type='spinner-circle' size={30} /> :
                                    error ?
                                        <div className='incorrectCredentials'>
                                            {
                                                imageNull ? <span> Want to add avatar? <span onClick={handleError}><AiOutlineCheckCircle /></span> <span ><VscError onClick={() => {
                                                    props.onHide()
                                                    setStable({ ...initialState })
                                                }} /></span> </span>
                                                    : <span>Missing credentials <span><VscError onClick={handleError} /></span></span>
                                            }
                                        </div>
                                        :
                                        <Button className='formButton' variant="primary" type="submit">
                                            {
                                                !isDone ? "Submit" : "Done"
                                            }
                                        </Button>
                            }
                        </Col>
                    </Row>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button className='formButton' onClick={() => {
                    props.onHide()
                    setStable({ ...initialState })
                }}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default StableOwnerModal
