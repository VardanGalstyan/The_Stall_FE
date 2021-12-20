import React, { useState } from 'react'
import { Modal, Button, Form, Col, Row } from 'react-bootstrap'
import { IoAddSharp } from 'react-icons/io5'
import Loader from 'react-js-loader'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import { VscError } from 'react-icons/vsc'
import { useHistory } from 'react-router-dom'
import StableSearchResult from './NewHorseModal/StableSearchResult'


function AddHorseModal(props) {

    const initialState = {
        name: "",
        gender: "",
        date_of_birth: "",
        breed: "",
        training_style: "",
        height: "",
        avatar: "",
        exp_level: "",
        description: "",
        stable: ""
    }

    const history = useHistory()
    const token = localStorage.getItem('token')
    const [image, setImage] = useState(null)
    const [imageNull, setImageNull] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [isDone, setIsDone] = useState(false)
    const [error, setError] = useState(false)
    const [horse, setHorse] = useState(initialState)
    const [id, setId] = useState('')



    const handleError = () => imageNull ? setError(false) : setError(false) && setHorse({ ...initialState })
    const validate = () => {
        if (horse.name.length > 3 &&
            horse.gender.length > 2 &&
            horse.date_of_birth.length > 3 &&
            horse.breed.length > 3 &&
            horse.training_style.length > 3 &&
            horse.height.length > 2 &&
            horse.exp_level.length > 3 &&
            horse.description.length > 3) {
            return true
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
                    const res = await fetch(`${process.env.REACT_APP_BASE_URL}horseOwner/me/horse/${id}/avatar`, {
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
                        setHorse({ ...initialState })
                        props.onHide()
                        setTimeout(() => {
                            setImage(null)
                            setIsDone(false)
                        }, 200)
                    }
                }
            } else {
                setIsLoading(true)
                const response = await fetch(`${process.env.REACT_APP_BASE_URL}horseOwner/me/horse`, {
                    method: "POST",
                    body: JSON.stringify(horse),
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
                    const res = await fetch(`${process.env.REACT_APP_BASE_URL}horseOwner/me/horse/${data._id}/avatar`, {
                        method: "POST",
                        body: formData,
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    })
                    if (res.ok) {
                        setIsDone(true)
                        setIsLoading(false)
                        setHorse({ ...initialState })
                        props.onHide()
                        setTimeout(() => {
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
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className='add-horse-modal'
            size='lg'
        >
            <Modal.Header closeButton>
                <Modal.Title>
                    Add a Horse
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Col lg={4} className='modal-avatar'>
                        <img src="https://autohaus-lemke.de/site/assets/files/1085/platzhalter-mann.jpg" alt="updateImage" />
                        <div className='add-horse-image'>
                            <input
                                type="file"
                                onChange={(e) => setImage(e.target.files[0])}
                            />
                            <IoAddSharp />
                        </div>
                    </Col>
                    <Col className='add-horse-modal-form'>
                        <Row>
                            <Form.Group as={Col}>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter name"
                                    value={horse.name}
                                    onChange={(e) => setHorse({ ...horse, name: e.target.value })}
                                />
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Control
                                    as="select"
                                    onChange={(e) => setHorse({ ...horse, gender: e.target.value })}
                                >
                                    <option>Gender</option>
                                    <option value='mare'>Mare</option>
                                    <option value='stallion'>Stallion</option>
                                    <option value='gelding'>Gelding</option>
                                </Form.Control>
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group as={Col}>
                                <Form.Control
                                    type="number"
                                    min='1990'
                                    max='2030'
                                    placeholder="Year"
                                    value={horse.date_of_birth}
                                    onChange={(e) => setHorse({ ...horse, date_of_birth: e.target.value })}
                                />
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Control
                                    type="text"
                                    placeholder="Breed"
                                    value={horse.breed}
                                    onChange={(e) => setHorse({ ...horse, breed: e.target.value })}
                                />
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Control
                                    type="number"
                                    min='140'
                                    max='200'
                                    placeholder="Height"
                                    value={horse.height}
                                    onChange={(e) => setHorse({ ...horse, height: e.target.value })}
                                />
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group as={Col}>
                                <Form.Control
                                    type="text"
                                    placeholder="Training Style"
                                    value={horse.training_style}
                                    onChange={(e) => setHorse({ ...horse, training_style: e.target.value })}
                                />
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Control
                                    type="text"
                                    placeholder="Experience"
                                    value={horse.exp_level}
                                    onChange={(e) => setHorse({ ...horse, exp_level: e.target.value })}
                                />
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group as={Col}>
                                <Form.Control
                                    as='textarea'
                                    style={{ height: '100px' }}
                                    type="textarea"
                                    placeholder="Description"
                                    value={horse.description}
                                    onChange={(e) => setHorse({ ...horse, description: e.target.value })}
                                />
                            </Form.Group>
                        </Row>
                        <StableSearchResult
                            stableValue={(stableId) => setHorse({ ...horse, stable: stableId })}
                            isStableValue={horse.stable}
                        />

                        {
                            isLoading ? <Loader type='spinner-circle' size={30} /> :
                                error ?
                                    <div className='incorrectCredentials'>
                                        {
                                            imageNull ? <span> Want to add avatar? <span onClick={handleError}><AiOutlineCheckCircle /></span> <span ><VscError onClick={() => {
                                                props.onHide()
                                                setHorse({ ...initialState })
                                            }} /></span> </span>
                                                : <span>Missing credentials <span><VscError onClick={handleError} /></span></span>
                                        }
                                    </div>
                                    :
                                    validate() &&
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
                <Button
                    className='form-button'
                    onClick={() => {
                        props.onHide()
                        setHorse({ ...initialState })
                    }}>Close</Button>
            </Modal.Footer>
        </Modal >
    )
}

export default AddHorseModal
