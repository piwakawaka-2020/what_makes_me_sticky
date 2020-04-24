import React from 'react'
import { connect } from 'react-redux'
import { getRandomCard } from '../actions/index'


class Question extends React.Component {
    // state = {
    //     question: '',
    // }
    

    componentDidMount(){
        this.props.getRandomCard()
    } 

    render () {
        // const { question } = this.props
        return(
            <>
            <div className='question'>
                {this.props.question}
            </div>
            </>
        )
    }

}

function mapStateToProps(globalState) {
    return {
      question: globalState.cards
    }
  }

const mapDispatchToProps = (dispatch) => {
    return {
      getRandomCard: () => dispatch(getRandomCard ())
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Question)

