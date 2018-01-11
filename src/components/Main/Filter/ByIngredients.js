import React from 'react'
import { Form, FormGroup, Label, Input } from 'reactstrap'

const ByIngredients = (props) =>
  <Form>
    <FormGroup>
      <Label for='ingredientSelect'>INGREDIENTS</Label>
      <Input type='select' name='ingredientSelect' id='ingredientSelect' onChange={props.ingredient}>
        <option>Select...</option>
        {
          props.ingredients.map((ingredient, i) => {
            return (
              <option key={i}>{ingredient.strIngredient1}</option>
            )
          })
        }
      </Input>
    </FormGroup>
  </Form>

export default ByIngredients
