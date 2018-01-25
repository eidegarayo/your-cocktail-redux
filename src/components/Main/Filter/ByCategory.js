import React, { Component } from 'react'
import { Form, FormGroup, Label, Input } from 'reactstrap'
import { connect } from 'react-redux'

import { getCatetoriesList, selectCategory, getCocktailsListByCat } from '../../../actions/index.js'
import { sortCatList } from '../../../utils'

class ByCategory extends Component {
  componentWillMount () {
    this.props.getCatetoriesList()
  }
  render () {
    let categories = []
    if (this.props.categories.drinks) {
      categories = this.props.categories.drinks
      categories.sort(sortCatList)
    }

    return (
      <div>
        <Form>
          <FormGroup>
            <Label for='categorySelect'>CATEGORY</Label>
            <Input type='select' name='categorySelect' id='categorySelect' onChange={event => { this.props.selectCategory(event.target.value); this.props.getCocktailsListByCat(event.target.value) }} value='Select one category...'>
              <option value=''>Select one category...</option>
              {
                categories.map((cat, i) => {
                  return (
                    <option key={i} value={cat.strCategory}>{cat.strCategory}</option>
                  )
                })
              }
            </Input>
          </FormGroup>
        </Form>
        <ul>
          {
            this.props.category ? <li>{this.props.category}</li> : <li className='empty' />
          }
        </ul>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    categories: state.categories,
    category: state.category,
    cocktails: state.cocktails
  }
}

export default connect(mapStateToProps, { getCatetoriesList, selectCategory, getCocktailsListByCat })(ByCategory)
