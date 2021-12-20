import React, { useState } from 'react'
import { Modal, Button, Row, Col, Form } from 'react-bootstrap'
import ActivityItem from './ActivityItem'
import Loader from 'react-loader-spinner'
import { useParams } from 'react-router-dom'

function CalendarModal(props) {

    const { id } = useParams()

    const initialState = {
        booking_date: '',
        message: '',
        activities: [],
        horse_id: id,
    }

    const [trainPlan, setTrainPlan] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)
    const [booking, setBooking] = useState(initialState)
    const [data, setData] = useState([])


    const groundWork = [
        'Longieren',
        'Freiarbeit',
        'Freilauf',
        'Freispringen',
        'Handarbeit',
        'Doppellonge',
        'Horsemanship',
        'Geitner',
        'Führtraining'
    ]

    const riding = [
        'Unterricht(Jede Disziplin)',
        '1h leicht',
        '1h mittel',
        '1h intensiv',
        '1/2 leicht',
        '1/2 mittel',
        '1/2 intensiv',
        'Ausreiten leicht',
        'Ausreiten mittel',
        'Ausreiten intensiv',
        'Votigieren',
        'Fahren',
        '+15 Minuten',
    ]

    const easyWalk = [
        'Spezieren',
        'Führanlage',
        'Klickertraining',
        'Zirzensik',
        'Pflege',
    ]

    const jointArray = [...easyWalk, ...riding, ...groundWork]

    const handleSubmit = async (e) => {
        try {
            e.preventDefault()
            setIsLoading(true)
            const response = await fetch(`${process.env.REACT_APP_BASE_URL}rider/me/bookings`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify(booking)
            })
            if (response.ok) {
                const data = await response.json()
                setIsLoading(false)
                setData(data)
                setBooking(initialState)
                props.onHide()
                props.handlefetch()
            } else {
                setIsLoading(false)
                setError(true)
                throw new Error('Something went wrong')
            }
        } catch (error) {
            console.log(error);
        }
    }

    const handleActivities = (value) => {
        if (value === 'easyWalk') {
            return easyWalk
        } else if (value === 'groundWork') {
            return groundWork
        } else if (value === 'riding') {
            return riding
        }
    }

    // const handleTheDate = (value) => {
    //     const dayValue = new Date(value).getDate()
    //     const monthValue = new Date(value).getMonth()
    //     const yearValue = new Date(value).getFullYear()

    //     return `${yearValue}-${monthValue}-${dayValue}`
    // }



    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            className='add-horse-modal'
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>
                    New booking
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Col className='add-horse-modal-form'>
                        <Row>
                            <Form.Group as={Col}>
                                <Form.Control
                                    type="date"
                                    value={booking.booking_date}
                                    onChange={(e) => setBooking({ ...booking, booking_date: e.target.value })}
                                />
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Control
                                    as="select"
                                    onChange={(e) => setTrainPlan(e.target.value)}
                                >
                                    <option>Activities</option>
                                    <option value='groundWork'>Ground Work</option>
                                    <option value='easyWalk'>Easy Walk</option>
                                    <option value='riding'>Riding</option>
                                </Form.Control>
                            </Form.Group>
                        </Row>
                        {
                            trainPlan &&
                            <Row>
                                <Form.Group
                                    as={Col}
                                    className='booking-modal-activities-form-group'
                                >
                                    {trainPlan && handleActivities(trainPlan).map((item, index) => (
                                        <ActivityItem
                                            item={item}
                                            key={index}
                                            setSelectedItems={(e) => setBooking({ ...booking, activities: e })}
                                            selectedItems={booking.activities}
                                        />
                                    ))
                                    }
                                </Form.Group>
                            </Row>
                        }
                        {
                            booking.activities &&
                            <Row>
                                <Form.Group
                                    as={Col}
                                    className='booking-modal-activities-form-group'
                                >
                                    {booking.activities
                                        .filter((v, i, a) => a.indexOf(v) === i)
                                        .map((item, index) => (
                                            <ActivityItem
                                                item={item}
                                                key={index}
                                                setSelectedItems={(e) => setBooking({ ...booking, activities: e })}
                                                selectedItems={booking.activities}
                                                jointArray={jointArray}
                                            />
                                        ))
                                    }
                                </Form.Group>
                            </Row>
                        }
                        <Row>
                            <Form.Group as={Col}>
                                <Form.Control
                                    as='textarea'
                                    style={{ height: '70px' }}
                                    type="textarea"
                                    placeholder="message"
                                    value={booking.message}
                                    onChange={(e) => setBooking({ ...booking, message: e.target.value })}
                                />
                            </Form.Group>
                        </Row>
                        {
                            isLoading ?
                                <Loader
                                    type='ThreeDots'
                                    width={30}
                                    height={30}
                                    color='#ffcc56'
                                /> :
                                <Button
                                    className='form-button'
                                    variant="primary"
                                    type="submit"
                                    onClick={handleSubmit}
                                >
                                    Submit
                                </Button>
                        }
                    </Col>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button
                    className='form-button'
                    onClick={() => {
                        setBooking(initialState)
                        setTrainPlan('')
                        props.onHide()
                    }}>
                    Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default CalendarModal
