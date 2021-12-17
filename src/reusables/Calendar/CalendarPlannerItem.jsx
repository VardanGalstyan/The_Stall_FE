import React from 'react'
import { TiDelete } from 'react-icons/ti'
import { MdModeEditOutline } from 'react-icons/md'

function CalendarPlannerItem({ booking }) {

    const date = new Date(booking.booking_date).toString().split(' ').slice(1, 4).join(' ')

    return (
        <div className='calendar-planner-item'>
            <div className='calendar-planner-constants'>
                <span className='planner-title'>{booking && booking.horse_id.name}</span>
                <span className='planner-date'>{booking && date}</span>
            </div>
            <div className='private-buttons'>
                <span className='delete-button'><TiDelete /></span>
                <span className='edit-button'><MdModeEditOutline /></span>
            </div>
        </div>
    )
}

export default CalendarPlannerItem
