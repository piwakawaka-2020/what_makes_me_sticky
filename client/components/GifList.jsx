import React from 'react'

import Gif from './Gif'

import {connect} from 'react-redux'

const GifList = (props) => {

    
  return (
    <div id='gifContainer'>
        {props.gifs.map(gif => <Gif id={gif.id} src={gif.images.downsized_large.url} />)}
    </div>
  )
}

function mapStateToProps(state) {
    return {
        gifs: state.gifs
    }
}

export default connect(mapStateToProps)(GifList)