import React from 'react'
import { Form, FormGroup, Label, Input } from 'reactstrap'

const ByCategory = (props) =>
  <Form>
    <FormGroup>
      <Label for='categorySelect'>CATEGORY</Label>
      <Input type='select' name='categorySelect' id='categorySelect' onChange={props.category}>
        <option>Select...</option>
        {
          props.categories.map((category, i) => {
            return (
              <option key={i}>{category.strCategory}</option>
            )
          })
        }
      </Input>
    </FormGroup>
  </Form>

export default ByCategory
