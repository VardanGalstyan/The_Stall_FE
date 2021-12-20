import React, { useState } from 'react'
import useFetch from '../../../utils/useFetch'
import { Modal, Button } from 'react-bootstrap'
import Calendar from 'react-calendar'
import { isSameDay } from 'date-fns'
import 'react-calendar/dist/Calendar.css';

function CalendarModal(props) {

    const token = localStorage.getItem('token')
    const { data } = useFetch(`${process.env.REACT_APP_BASE_URL}rider/me`, token)
    const bookingDates = data && data.bookings
    const [value, onChange] = useState(new Date())



    const formattedDate = date => new Date(Date.parse(date))

    const selectedClassName = ({ date, view }) => {
        if (view === 'month') {
            if (bookingDates && bookingDates.find(day => isSameDay(formattedDate(day.booking_date), date))) {
                return 'react-calendar__tile--active'
            }
        }
    }

    const handleClosureFunction = () => {
        props.onHide()
        onChange(new Date())
    }

    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className='ridingCalendar'
        >
            <Modal.Header closeButton>
                <Modal.Title>
                    Riding Calendar
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Calendar
                    value={value}
                    onChange={onChange}
                    tileClassName={selectedClassName}
                    allowPartialRange
                />
            </Modal.Body>
            <Modal.Footer>
                <Button>Reserve</Button>
                <Button onClick={handleClosureFunction}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default CalendarModal
