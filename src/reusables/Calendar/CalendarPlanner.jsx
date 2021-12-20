import React, { useState } from 'react'
import Calendar from 'react-calendar'
import { isSameDay } from 'date-fns'
import './style/calendarStyle.css'
import CalendarPlannerDetails from './CalendarPlannerDetails'




function CalendarPlanner({ bookings, handlefetch }) {

    const [value, onChange] = useState(new Date())
    const formattedDate = date => new Date(Date.parse(date))

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
            <CalendarPlannerDetails bookings={bookings} value={value} handlefetch={handlefetch} />

        </div>
    )
}

export default CalendarPlanner
