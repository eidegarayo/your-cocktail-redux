import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'reactstrap'

import { reset } from '../../../actions'

const Reset = ({ onClick }) => (
  <Button className='active text-white' onClick={e => onClick()}>reset</Button>
)

const mapStateToProps = (state) => {
  return {
    category: state.category
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      dispatch(reset())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Reset)
