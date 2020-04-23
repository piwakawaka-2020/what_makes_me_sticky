import React from 'react'

const SelectionArea = () => {
    const drop = e => {
        e.preventDefault();

        const gifId = e.dataTransfer.getData('gifId')
        const gif = document.getElementById(gifId)

        e.target.appendChild(gif)
    }

    const dragOver = e => {
        e.preventDefault()
    }

    return (
        <div id='selection'
            onDrop={drop}
            onDragOver={dragOver}
        ></div>
    )
}

export default SelectionArea