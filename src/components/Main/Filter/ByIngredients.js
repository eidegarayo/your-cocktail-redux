import React from 'react'
import { Form, FormGroup, Label, Input } from 'reactstrap'

import { sortIngrsList } from '../../../utils/utils'

const ByIngredients = props => {
  props.ingredients.sort(sortIngrsList)
  return (
    <Form>
      <FormGroup>
        <Label for='ingrSelect'>INGREDIENTS</Label>
        <Input type='select' name='ingrSelect' id='ingrSelect' onChange={props.selectIngr} value='Select ingredients...'>
          <option value=''>Select ingredients...</option>
          {
            props.ingredients.map((ingr, i) => {
              return (
                <option key={i}>{ingr.strIngredient1}</option>
              )
            })
          }
        </Input>
      </FormGroup>
    </Form>
  )
}

export default ByIngredients
