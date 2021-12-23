import React, { useState } from 'react'
import CalendarPlannerItem from './CalendarPlannerItem'
import { VscAdd } from 'react-icons/vsc'
import { useParams } from 'react-router-dom'
import CalendarModal from './CalendarModal/CalendarModal'


function CalendarPlannerDetails({ bookings, value, handlefetch }) {

    // const date = new Date(value).toString().split(' ').slice(1, 4).join(' ')
    const { id } = useParams()
    const [modalShow, setModalShow] = useState(false);

    // const handleTheDate = (value) => {
    //     const dayValue = new Date(value).getDate()
    //     const monthValue = new Date(value).getMonth()
    //     const yearValue = new Date(value).getFullYear()

    //     return `${yearValue}, ${monthValue}, ${dayValue}`
    // }

    return (
        <div className='calendar-planner-details' >
            <div className='calendar-planner-header'>
                <span className='current-plans'>
                    Current Plans
                </span>
                <span className='history'>
                    History
                </span>
            </div>
            <div
                className='book-a-ride'
                onClick={() => setModalShow(true)}
            >
                <span className='book-ride-text'>Add booking </span>
                <span
                    className='book-ride-icon'
                >
                    <VscAdd />
                </span>
            </div>
            <div className='calendar-booking-details'>
                {
                    bookings && bookings.length !== 0 ?
                        bookings && bookings.sort((a, b) => new Date(b.booking_date) - new Date(a.booking_date)).map(booking =>
                            <CalendarPlannerItem
                                key={booking._id}
                                booking={booking}
                            />
                        )
                        : <div className='no-booking-text'> You have no appointments yet.</div>
                }
            </div>
            <CalendarModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                datevalue={value}
                handlefetch={handlefetch}
            />


        </div >
    )
}

export default CalendarPlannerDetails
