import React from 'react'
import { connect } from 'react-redux'
import { getRandomCard } from '../actions/index'


class Question extends React.Component {
    state = {
        question: '',
    }
    

    componentDidMount(){
        this.props.dispatch(getRandomCard())
    } 

    render () {
        const { question } = this.props
        return(
            <>
            <div className='question'>
                What makes me sticky?
            </div>
            </>
        )
    }

}

function mapStateToProps(globalState) {
    return {
      question: globalState.question
    }
  }

// const mapDispatchToProps = (dispatch) => {
//     return {
//       getRandomCard: (question) => dispatch(getRandomCard (question))
//     }
// }
  
export default connect(mapStateToProps)(Question)

