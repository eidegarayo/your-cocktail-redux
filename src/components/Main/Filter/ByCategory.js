import React from 'react'
import { Form, FormGroup, Label, Input } from 'reactstrap'

import { sortCatList } from '../../../utils/utils'

const ByCategory = props => {
  props.categories.sort(sortCatList)
  return (
    <Form>
      <FormGroup>
        <Label for='categorySelect'>CATEGORY</Label>
        <Input type='select' name='categorySelect' id='categorySelect' onChange={props.category} value='Select one category...'>
          <option value=''>Select one category...</option>
          {
            props.categories.map((cat, i) => {
              return (
                <option key={i} value={cat.strCategory}>{cat.strCategory}</option>
              )
            })
          }
        </Input>
      </FormGroup>
    </Form>
  )
}

export default ByCategory
