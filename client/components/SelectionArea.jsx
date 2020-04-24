import React from 'react'
import { connect } from 'react-redux'

import { showScore } from '../actions/score'

const SelectionArea = props => {
    const drop = e => {
        e.preventDefault();

        const gifId = e.dataTransfer.getData('gifId')
        const gif = document.getElementById(gifId)

        e.target.appendChild(gif)

        props.dispatch(showScore(true))
    }

    const dragOver = e => {
        e.preventDefault()
    }

    return (
        <div id='selection'
            onDrop={drop}
            onDragOver={dragOver}
        >Drag GIF here</div>
    )
}

export default connect()(SelectionArea)