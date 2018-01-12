import React from 'react'
import { Form, FormGroup, Label, Input } from 'reactstrap'

const ByCategory = (props) =>
  <Form>
    <FormGroup>
      <Label for='categorySelect'>CATEGORY</Label>
      <Input type='select' name='categorySelect' id='categorySelect' onChange={props.category}>
        <option value=''>Select one category...</option>
        {
          props.categories.map((category, i) => {
            return (
              <option key={i} value={category.strCategory}>{category.strCategory}</option>
            )
          })
        }
      </Input>
    </FormGroup>
  </Form>

export default ByCategory
