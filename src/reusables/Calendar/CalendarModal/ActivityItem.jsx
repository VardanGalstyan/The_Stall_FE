import React, { useState } from 'react'
import { TiDelete } from 'react-icons/ti'


function ActivityItem({ item, key, setSelectedItems, selectedItems, jointArray }) {


    const handleUniqueArray = (e) => {
        const newArray = selectedItems.filter(value => value !== e.target.innerText)
        setSelectedItems([...newArray, item])
    }

    const handleRemove = (e) => {
        const newArray = selectedItems.filter(value => value !== e.currentTarget.previousSibling.innerText)
        setSelectedItems(newArray)

    }


    return (
        <div
            key={key}
            className={`${!jointArray ? 'activity-item' : 'activity-item-joint'}`}

        >
            <span onClick={(e) => handleUniqueArray(e)}>{`${item}`}</span>

            {
                jointArray &&
                <span
                    className='remove-button'
                    onClick={(e) => handleRemove(e)}
                >
                    {<TiDelete />}
                </span>
            }
        </div>
    )
}

export default ActivityItem
