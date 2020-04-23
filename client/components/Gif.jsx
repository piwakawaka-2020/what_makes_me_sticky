import React from 'react'

const Gif = (props) => {
    const dragStart = e => {
        const target = e.target
        e.dataTransfer.setData('gifId', target.id)

        setTimeout(() => {
            target.style.display = 'none'
        }, 0)
    }

    const dragOver = e => {
        e.stopPropagation();
    }
    
    return (
        <img 
            id={props.id}
            className='gif' 
            src={props.src}
            onDragStart={dragStart}
            onDragOver={dragOver}
            draggable='true'
        />
  )
}

export default Gif