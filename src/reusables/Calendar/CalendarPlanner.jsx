import React from 'react'
import Calendar from 'react-calendar'
import { Col } from 'react-bootstrap'
import { GiPlainCircle } from 'react-icons/gi'
import { TiDelete } from 'react-icons/ti'
import { MdModeEditOutline } from 'react-icons/md'
import './style/calendarStyle.css'

function CalendarPlanner() {
    return (
        <div id='calendar-planner'>
            <Col className='calendar' xs={11} sm={11} md={5}>
                <Calendar
                // value={value}
                // onChange={onChange}
                // tileClassName={selectedClassName}
                // allowPartialRange
                />
            </Col>
            <Col className='calendar-planner-details'>
                <div className='calendar-planner-header'>
                    <span>Current Plans</span>
                    <span>History</span>
                </div>
                <div className='calendar-planner-item'>
                    <div>
                        <span className='color-code'><GiPlainCircle /></span>
                        <span>With horseName</span>
                        <span className='planner-date'>June 25, 2022</span>
                    </div>
                    <div>
                        <span className='delete-button'><TiDelete /></span>
                        <span className='edit-button'><MdModeEditOutline /></span>
                    </div>
                </div>
                <div className='calendar-planner-item'>
                    <div>
                        <span className='color-code'><GiPlainCircle /></span>
                        <span>With horseName</span>
                        <span className='planner-date'>June 25, 2022</span>
                    </div>
                    <div>
                        <span className='delete-button'><TiDelete /></span>
                        <span className='edit-button'><MdModeEditOutline /></span>
                    </div>
                </div>
            </Col>

        </div>
    )
}

export default CalendarPlanner
