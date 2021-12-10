import React from 'react'
import Calendar from 'react-calendar'
import { Col } from 'react-bootstrap'
import { TiDelete } from 'react-icons/ti'
import { MdModeEditOutline } from 'react-icons/md'
import './style/calendarStyle.css'

function CalendarPlanner() {
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
                <div className='calendar-planner-item'>
                    <div className='calendar-planner-constants'>
                        <span className='planner-title'>Scatto</span>
                        <span className='planner-date'>June 25, 2022</span>
                    </div>
                    <div className='private-buttons'>
                        <span className='delete-button'><TiDelete /></span>
                        <span className='edit-button'><MdModeEditOutline /></span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CalendarPlanner
