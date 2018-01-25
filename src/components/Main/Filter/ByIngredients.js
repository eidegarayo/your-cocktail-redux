import React, { Component } from 'react'
import { Form, FormGroup, Label, Input } from 'reactstrap'
import { connect } from 'react-redux'

import { getIngredientsList, selectIngredient, getCocktailsByIngr, filterListByIngrs } from '../../../actions/index.js'
import { sortIngrsList } from '../../../utils'

class ByIngredients extends Component {
  componentWillMount () {
    this.props.getIngredientsList()
  }

  handleOnChange = async event => {
    this.props.selectIngredient(event.target.value)
    const list = await getCocktailsByIngr(event.target.value)
    console.log(list)
    console.log(this.props.cocktails)
    this.props.filterListByIngrs(this.props.cocktails, list)
  }

  render () {
    let ingredients = []
    if (this.props.ingredients.drinks) {
      ingredients = this.props.ingredients.drinks
      ingredients.sort(sortIngrsList)
    }
    return (
      <div>
        <Form>
          <FormGroup>
            <Label for='ingrSelect'>INGREDIENTS</Label>
            <Input type='select' name='ingrSelect' id='ingrSelect' onChange={this.handleOnChange} value='Select ingredients...'>
              <option value=''>Select ingredients...</option>
              {
                ingredients.map((ingr, i) => {
                  return (
                    <option key={i}>{ingr.strIngredient1}</option>
                  )
                })
              }
            </Input>
          </FormGroup>
        </Form>
        <ul>
          {
            this.props.ingredient.map((ingr, i) => <li key={i}>{ingr}</li>)
          }
        </ul>
      </div>
    )
  }
} 

function mapStateToProps (state) {
  return {
    ingredients: state.ingredients,
    ingredient: state.ingredient,
    cocktails: state.cocktails
  }
}

export default connect(mapStateToProps, { getIngredientsList, selectIngredient, filterListByIngrs })(ByIngredients)
