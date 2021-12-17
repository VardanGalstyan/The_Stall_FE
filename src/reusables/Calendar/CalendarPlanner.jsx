import React, { useState } from 'react'
import Calendar from 'react-calendar'
import CalendarPlannerItem from './CalendarPlannerItem'
import { isSameDay } from 'date-fns'
import { VscAdd } from 'react-icons/vsc'
import { useParams } from 'react-router-dom'
import './style/calendarStyle.css'




function CalendarPlanner({ bookings }) {

    const [value, onChange] = useState(new Date())
    const formattedDate = date => new Date(Date.parse(date))
    const date = new Date(value).toString().split(' ').slice(1, 4).join(' ')
    const { id } = useParams()

    const handleTheDate = (value) => {
        const dayValue = new Date(value).getDate()
        const monthValue = new Date(value).getMonth()
        const yearValue = new Date(value).getFullYear()

        return `${yearValue}, ${monthValue}, ${dayValue}`
    }

    const initialState = {
        booking_date: handleTheDate(value),
        horse_id: id,
    }

    console.log(handleTheDate(value));

    const handleBooking = async () => {
        try {
            const response = await fetch('http://localhost:3001/rider/me/bookings', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify(initialState)
            })
            if (response.ok) {
                const data = await response.json()
                console.log(data)
            } else {
                throw new Error('Something went wrong')
            }
        } catch (error) {
            console.log(error);
        }
    }


    const selectedClassName = ({ date, view }) => {
        if (view === 'month') {
            if (bookings && bookings.find(day => isSameDay(formattedDate(day.booking_date), date))) {
                return 'react-calendar__tile--active'
            }
        }
    }

    return (
        <div id='calendar-planner'>
            <div className='calendar'>
                <Calendar
                    value={value}
                    onChange={onChange}
                    tileClassName={selectedClassName}
                    allowPartialRange
                />
            </div>
            <div className='calendar-planner-details' >
                <div className='calendar-planner-header'>
                    <span className='current-plans'>
                        Current Plans
                    </span>
                    <span className='history'>
                        History
                    </span>
                </div>
                {
                    bookings && bookings.length === 0 ?
                        <div className='no-booking-available'>
                            <div className='book-a-ride'>
                                <span className='book-ride-text'>Request a ride on {date} </span>
                                <span
                                    className='book-ride-icon'
                                    onClick={handleBooking}
                                >
                                    <VscAdd />
                                </span>
                            </div>
                        </div>
                        : bookings && bookings.map(booking =>
                            <CalendarPlannerItem
                                key={booking.id}
                                booking={booking}
                            />
                        )
                }
            </div>

        </div>
    )
}

export default CalendarPlanner
