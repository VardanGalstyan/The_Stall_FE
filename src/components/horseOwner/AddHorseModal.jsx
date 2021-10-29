import React, { useState } from 'react'
import { Modal, Button, Form, Col, Row } from 'react-bootstrap'
import { IoAddSharp } from 'react-icons/io5'

function AddHorseModal(props) {

    const [horse, setHorse] = useState({
        name: "",
        gender: "",
        date_of_birth: "",
        breed: "",
        training_style: "",
        height: "",
        avatar: "",
        exp_level: "",
        description: ""
    })


    return (
        <Modal
            {...props}
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className='addHorsesModal'
            size='lg'
        >
            <Modal.Header closeButton>
                <Modal.Title>
                    Add a Horse
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Row>
                        <Col lg={4} className='mb-4'>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOPyfvJRS9c3YymVIXifqqFXQ2eMDNfZjhMw&usqp=CAU" alt="updateImage" />
                            <div className='addHorseImage'>
                                <IoAddSharp />
                            </div>
                        </Col>
                        <Col>
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
                                        placeholder="Enter a Year"
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
                                        type="text"
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
                            <Button className='formButton' variant="primary" type="submit">
                                Submit
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button className='formButton' onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default AddHorseModal
