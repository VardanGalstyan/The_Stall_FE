import React from 'react'
// import { TiDelete } from 'react-icons/ti'
// import { MdModeEditOutline } from 'react-icons/md'

function CalendarPlannerItem({ booking }) {

    const date = new Date(booking.booking_date).toString().split(' ').slice(1, 4).join(' ')

    return (
        <div className='calendar-planner-container'>
            <div className='calendar-planner-item'>
                <div className='calendar-planner-titles'>
                    <span className='planner-title'>{booking && booking.horse_id.name}</span>
                    <span>something</span>
                </div>
                <div className='calendar-planner-content'>
                    <span className='planner-message'>{booking && booking.message}</span>
                </div>
                <div className='calendar-planner-date-location'>
                    <span className='planner-date'>{booking && date}</span>
                    <span className='planner-location'>{'location'}</span>
                </div>
            </div>
            <div className='calendar-planner-activity'>
                {
                    booking && booking.activities.map(activity => (
                        <span key={activity._id}>{activity}</span>
                    ))
                }
            </div>
            {
                /* <div className='private-buttons'>
                    <span className='delete-button'><TiDelete /></span>
                    <span className='edit-button'><MdModeEditOutline /></span>
                </div> */
            }
        </div>
    )
}

export default CalendarPlannerItem
