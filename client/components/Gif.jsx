import React from 'react'

const Gif = () => {
    const dragStart = e => {
        const target = e.target
        e.dataTransfer.setData('gifId', target.id)

        // setTimeout(() => {
        //     target.style.display = 'none'
        // }, 0)
    }

    const dragOver = e => {
        e.stopPropagation();
    }
    
    return (
        <img 
            id='giphy.gif'
            className='gif' 
            src='giphy.gif'
            onDragStart={dragStart}
            onDragOver={dragOver}
            draggable='true'
        />
  )
}

export default Gif