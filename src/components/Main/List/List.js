import React from 'react'
import { Media, Row, Col } from 'reactstrap'

import './List.css'

const List = props => {
  return (
    <div className='cocktails-list mt-5'>
      <h3 className='mb-4'>COCKTAILS</h3>
      <Row>
        {
          (props.cocktails && props.cocktails.length > 0)
          ? props.cocktails.map((cocktail, i) => {
            if (cocktail.strDrinkThumb !== null) {
              return (
                <Col xs='12' sm='6' key={i}>
                  <Media className='mb-4' >
                    <Media object className='mr-2 img-thumbnail' src={cocktail.strDrinkThumb} onClick={props.select} data-cocktailid={cocktail.idDrink} />
                    <Media onClick={props.select} data-cocktailid={cocktail.idDrink}>
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

export default List
