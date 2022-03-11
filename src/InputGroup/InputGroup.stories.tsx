import React from 'react'
import { Story, Meta } from '@storybook/react'

import InputGroup, { InputGroupProps } from '.'
import Form from '../Form'
import Input from '../Input'

export default {
  title: 'Layout/InputGroup',
  component: InputGroup,
} as Meta

export const Default: Story<InputGroupProps> = (args) => {
  return (
    <Form>
      <label className="label">
        <span className="label-text">Enter amount</span>
      </label>
      
      <InputGroup {...args}>
        <span>Price</span>
          <Input type="text" placeholder="10" bordered />
        <span>USD</span>
      </InputGroup>
    </Form>
  )
}

Default.args = {}
