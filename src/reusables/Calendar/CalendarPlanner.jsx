import React from 'react'
import Calendar from 'react-calendar'
import CalendarPlannerItem from './CalendarPlannertem'
import './style/calendarStyle.css'

function CalendarPlanner({ bookings }) {
    return (
        <div id='calendar-planner'>
            <div className='calendar'>
                <Calendar
                // value={value}
                // onChange={onChange}
                // tileClassName={selectedClassName}
                // allowPartialRange
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
                    bookings === null
                        ? <div>No Bookings available yet</div> // we need to fix this one CSS mostly
                        : bookings.map(booking => <CalendarPlannerItem key={booking.id} booking={booking} />)
                }
            </div>

        </div>
    )
}

export default CalendarPlanner
