import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button } from './Button'

export default {
  title: 'UI/Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Ok</Button>
)

const Default = Template.bind({})

const Positive = Template.bind({})
Positive.args = {
  color: 'positive',
}

const Negative = Template.bind({})
Negative.args = {
  color: 'negative',
}

export { Default, Positive, Negative }
