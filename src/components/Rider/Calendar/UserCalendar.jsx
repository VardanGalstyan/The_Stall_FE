import React from 'react'
import { BsFillCalendar2MonthFill } from 'react-icons/bs'
import CalendarModal from './CalendarModal';


function UserCalendar() {

    const [modalShow, setModalShow] = React.useState(false)


    return (
        <div className='userCalendar'>
            <div onClick={() => setModalShow(true)}>
                <span ><BsFillCalendar2MonthFill /></span>
            </div>
            <CalendarModal show={modalShow} onHide={() => setModalShow(false)} />
        </div>
    )
}

export default UserCalendar
