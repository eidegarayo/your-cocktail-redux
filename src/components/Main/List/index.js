import React, { Component } from 'react'
import { Media, Row, Col } from 'reactstrap'
import { connect } from 'react-redux'
import { getCocktailById } from '../../../actions/index.js'

import './List.css'

class List extends Component {
  render () {
    return (
      <div className='cocktails-list mt-5'>
        <h3 className='mb-4'>COCKTAILS</h3>
        <Row>
          {
            (this.props.cocktails.length > 0)
            ? this.props.cocktails.map((cocktail, i) => {
              if (cocktail.strDrinkThumb !== null) {
                return (
                  <Col xs='12' sm='6' key={i}>
                    <Media className='mb-4' >
                      <Media object className='mr-2 img-thumbnail' src={cocktail.strDrinkThumb}
                        onClick={() => this.props.getCocktailById(cocktail.idDrink)} />
                      <Media onClick={() => this.props.getCocktailById(cocktail.idDrink)}>
                        {cocktail.strDrink}
                      </Media>
                    </Media>
                  </Col>
                )
              }
            })
            : <Col>Try another category or ingredients to find your perfect cocktail</Col>
          }
        </Row>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    cocktails: state.cocktails,
    cocktail: state.cocktail
  }
}

export default connect(mapStateToProps, { getCocktailById })(List)
