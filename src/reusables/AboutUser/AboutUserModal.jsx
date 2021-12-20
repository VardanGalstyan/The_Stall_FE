import React, { useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

function AboutUserModal(props) {

    const token = localStorage.getItem('token')
    const role = localStorage.getItem('role')
    const [isLoading, setIsLoading] = useState(false)
    const [description, setDescription] = useState({ description: '' })
    const { id } = useParams()

    const handleUpdateDescription = async (e) => {
        try {
            e.preventDefault()
            setIsLoading(true)
            const response = await fetch(`${process.env.REACT_APP_BASE_URL}/${role}/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(description)
            })
            if (response.ok) {
                setIsLoading(false)
                props.onHide()
                props.handlefetch()

            } else {
                setIsLoading(false)
                throw new Error('Something went wrong')
            }

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Modal
            {...props}
            id='about-user-modal'
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>
                    Edit
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            value={description.description}
                            onChange={(e) => setDescription({ description: e.target.value })}
                        />
                    </Form.Group>
                </Form>

            </Modal.Body>
            <Modal.Footer>
                <button
                    onClick={(e) => handleUpdateDescription(e)}
                    className='modal-save-button'
                >
                    {isLoading ? 'Loading...' : 'Save'}
                </button>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default AboutUserModal
