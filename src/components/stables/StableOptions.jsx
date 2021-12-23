import React, { useState } from 'react'
import { Row } from 'react-bootstrap'
import useFetch from '../../utils/useFetch'
import RiderOptionsHorse from '../Rider/RiderOptions/RiderOptionsHorse'
import { useParams } from 'react-router'
import Calendar from 'react-calendar'
// import getDate from 'date-fns/getDate'
// import getYear from 'date-fns/getYear'
// import getMonth from 'date-fns/getMonth'
import isSameDay from 'date-fns/isSameDay'



function StableOptions() {

    const { id } = useParams()
    const { data } = useFetch(`${process.env.REACT_APP_BASE_URL}/stables/${id}`)
    const [value, onChange] = useState(new Date());
    const [selectedDay, setSelectedDay] = useState([])

    const handleDateFunction = () => {
        if (selectedDay.length === 0) {
            setSelectedDay([...selectedDay, value])
        } else {
            const sameDay = selectedDay.some(day => isSameDay(value, day))
            if (sameDay) {
                const filteredDay = selectedDay.filter(day => !isSameDay(day, value))
                setSelectedDay(filteredDay)
            } else {
                setSelectedDay([...selectedDay, value])
            }
        }
    }

    const selectedClassName = ({ date, view }) => {
        if (view === 'month') {
            if (selectedDay.find(day => isSameDay(day, date))) {
                return 'react-calendar__tile--active'
            }
        }
    }


    // const date = `${getYear(value)}, ${getMonth(value)}, ${getDate(value)}`

    return (
        <>
            < Row className='riderOptions' >
                {
                    data && < RiderOptionsHorse horses={data.horses} />
                }
                <Row className='flex-column'>
                    <Calendar
                        // onClickDay={(value) => handleDateFunction(value)}
                        value={value}
                        onChange={onChange}
                        allowPartialRange
                        tileClassName={selectedClassName}
                    />
                    <button onClick={handleDateFunction}>Reserve</button>
                </Row>
            </Row >
        </>

    )
}

export default StableOptions
